use crate::{
    client::Client,
    error::Error,
    request::{Request, TryIntoRequest},
    response::{Response, ResponseFuture},
    routing::Route,
};
use std::future::IntoFuture;
use twilight_model::{
    guild::GuildIntegration,
    id::{marker::GuildMarker, Id},
};

/// Get the guild's integrations.
///
/// This endpoint returns a maximum of 50 integrations. If a guild has more
/// integrations then they can't be accessed.
#[must_use = "requests must be configured and executed"]
pub struct GetGuildIntegrations<'a> {
    guild_id: Id<GuildMarker>,
    http: &'a Client,
}

impl<'a> GetGuildIntegrations<'a> {
    pub(crate) const fn new(http: &'a Client, guild_id: Id<GuildMarker>) -> Self {
        Self { guild_id, http }
    }

    /// Execute the request, returning a future resolving to a [`Response`].
    #[deprecated(since = "0.14.0", note = "use `.await` or `into_future` instead")]
    pub fn exec(self) -> ResponseFuture<Vec<GuildIntegration>> {
        self.into_future()
    }
}

impl IntoFuture for GetGuildIntegrations<'_> {
    type Output = Result<Response<Vec<GuildIntegration>>, Error>;

    type IntoFuture = ResponseFuture<Vec<GuildIntegration>>;

    fn into_future(self) -> Self::IntoFuture {
        let http = self.http;

        match self.try_into_request() {
            Ok(request) => http.request(request),
            Err(source) => ResponseFuture::error(source),
        }
    }
}

impl TryIntoRequest for GetGuildIntegrations<'_> {
    fn try_into_request(self) -> Result<Request, Error> {
        Ok(Request::from_route(&Route::GetGuildIntegrations {
            guild_id: self.guild_id.get(),
        }))
    }
}
