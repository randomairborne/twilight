use crate::{
    client::Client,
    error::Error,
    request::{Request, TryIntoRequest},
    response::{Response, ResponseFuture},
    routing::Route,
};
use std::future::IntoFuture;
use twilight_model::{
    channel::Message,
    id::{marker::ChannelMarker, Id},
};

/// Get the pins of a channel.
#[must_use = "requests must be configured and executed"]
pub struct GetPins<'a> {
    channel_id: Id<ChannelMarker>,
    http: &'a Client,
}

impl<'a> GetPins<'a> {
    pub(crate) const fn new(http: &'a Client, channel_id: Id<ChannelMarker>) -> Self {
        Self { channel_id, http }
    }

    /// Execute the request, returning a future resolving to a [`Response`].
    #[deprecated(since = "0.14.0", note = "use `.await` or `into_future` instead")]
    pub fn exec(self) -> ResponseFuture<Vec<Message>> {
        self.into_future()
    }
}

impl IntoFuture for GetPins<'_> {
    type Output = Result<Response<Vec<Message>>, Error>;

    type IntoFuture = ResponseFuture<Vec<Message>>;

    fn into_future(self) -> Self::IntoFuture {
        let http = self.http;

        match self.try_into_request() {
            Ok(request) => http.request(request),
            Err(source) => ResponseFuture::error(source),
        }
    }
}

impl TryIntoRequest for GetPins<'_> {
    fn try_into_request(self) -> Result<Request, Error> {
        Ok(Request::from_route(&Route::GetPins {
            channel_id: self.channel_id.get(),
        }))
    }
}
