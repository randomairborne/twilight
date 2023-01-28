use crate::{
    client::Client,
    error::Error,
    request::{Request, TryIntoRequest},
    response::{Response, ResponseFuture},
    routing::Route,
};
use std::future::IntoFuture;
use twilight_model::{
    guild::Role,
    id::{marker::GuildMarker, Id},
};

/// Get the roles of a guild.
#[must_use = "requests must be configured and executed"]
pub struct GetGuildRoles<'a> {
    guild_id: Id<GuildMarker>,
    http: &'a Client,
}

impl<'a> GetGuildRoles<'a> {
    pub(crate) const fn new(http: &'a Client, guild_id: Id<GuildMarker>) -> Self {
        Self { guild_id, http }
    }

    /// Execute the request, returning a future resolving to a [`Response`].
    #[deprecated(since = "0.14.0", note = "use `.await` or `into_future` instead")]
    pub fn exec(self) -> ResponseFuture<Vec<Role>> {
        self.into_future()
    }
}

impl IntoFuture for GetGuildRoles<'_> {
    type Output = Result<Response<Vec<Role>>, Error>;

    type IntoFuture = ResponseFuture<Vec<Role>>;

    fn into_future(self) -> Self::IntoFuture {
        let http = self.http;

        match self.try_into_request() {
            Ok(request) => http.request(request),
            Err(source) => ResponseFuture::error(source),
        }
    }
}

impl TryIntoRequest for GetGuildRoles<'_> {
    fn try_into_request(self) -> Result<Request, Error> {
        Ok(Request::from_route(&Route::GetGuildRoles {
            guild_id: self.guild_id.get(),
        }))
    }
}
