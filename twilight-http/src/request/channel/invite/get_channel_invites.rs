use crate::{
    client::Client,
    error::Error,
    request::{Request, TryIntoRequest},
    response::{Response, ResponseFuture},
    routing::Route,
};
use std::future::IntoFuture;
use twilight_model::{
    guild::invite::Invite,
    id::{marker::ChannelMarker, Id},
};

/// Get the invites for a guild channel.
///
/// Requires the [`MANAGE_CHANNELS`] permission. This method only works if the
/// channel is a guild channel.
///
/// [`MANAGE_CHANNELS`]: twilight_model::guild::Permissions::MANAGE_CHANNELS
#[must_use = "requests must be configured and executed"]
pub struct GetChannelInvites<'a> {
    channel_id: Id<ChannelMarker>,
    http: &'a Client,
}

impl<'a> GetChannelInvites<'a> {
    pub(crate) const fn new(http: &'a Client, channel_id: Id<ChannelMarker>) -> Self {
        Self { channel_id, http }
    }

    /// Execute the request, returning a future resolving to a [`Response`].
    #[deprecated(since = "0.14.0", note = "use `.await` or `into_future` instead")]
    pub fn exec(self) -> ResponseFuture<Vec<Invite>> {
        self.into_future()
    }
}

impl IntoFuture for GetChannelInvites<'_> {
    type Output = Result<Response<Vec<Invite>>, Error>;

    type IntoFuture = ResponseFuture<Vec<Invite>>;

    fn into_future(self) -> Self::IntoFuture {
        let http = self.http;

        match self.try_into_request() {
            Ok(request) => http.request(request),
            Err(source) => ResponseFuture::error(source),
        }
    }
}

impl TryIntoRequest for GetChannelInvites<'_> {
    fn try_into_request(self) -> Result<Request, Error> {
        Ok(Request::from_route(&Route::GetChannelInvites {
            channel_id: self.channel_id.get(),
        }))
    }
}
