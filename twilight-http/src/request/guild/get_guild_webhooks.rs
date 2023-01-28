use crate::{
    client::Client,
    error::Error,
    request::{Request, TryIntoRequest},
    response::{Response, ResponseFuture},
    routing::Route,
};
use std::future::IntoFuture;
use twilight_model::{
    channel::Webhook,
    id::{marker::GuildMarker, Id},
};

/// Get the webhooks of a guild.
#[must_use = "requests must be configured and executed"]
pub struct GetGuildWebhooks<'a> {
    guild_id: Id<GuildMarker>,
    http: &'a Client,
}

impl<'a> GetGuildWebhooks<'a> {
    pub(crate) const fn new(http: &'a Client, guild_id: Id<GuildMarker>) -> Self {
        Self { guild_id, http }
    }

    /// Execute the request, returning a future resolving to a [`Response`].
    #[deprecated(since = "0.14.0", note = "use `.await` or `into_future` instead")]
    pub fn exec(self) -> ResponseFuture<Vec<Webhook>> {
        self.into_future()
    }
}

impl IntoFuture for GetGuildWebhooks<'_> {
    type Output = Result<Response<Vec<Webhook>>, Error>;

    type IntoFuture = ResponseFuture<Vec<Webhook>>;

    fn into_future(self) -> Self::IntoFuture {
        let http = self.http;

        match self.try_into_request() {
            Ok(request) => http.request(request),
            Err(source) => ResponseFuture::error(source),
        }
    }
}

impl TryIntoRequest for GetGuildWebhooks<'_> {
    fn try_into_request(self) -> Result<Request, Error> {
        Ok(Request::from_route(&Route::GetGuildWebhooks {
            guild_id: self.guild_id.get(),
        }))
    }
}
