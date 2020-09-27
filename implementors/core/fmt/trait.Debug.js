(function() {var implementors = {};
implementors["twilight_cache_inmemory"] = [{"text":"impl Debug for CachedEmoji","synthetic":false,"types":[]},{"text":"impl Debug for CachedGuild","synthetic":false,"types":[]},{"text":"impl Debug for CachedMember","synthetic":false,"types":[]},{"text":"impl Debug for CachedMessage","synthetic":false,"types":[]},{"text":"impl Debug for CachedPresence","synthetic":false,"types":[]},{"text":"impl Debug for CachedVoiceState","synthetic":false,"types":[]},{"text":"impl Debug for InMemoryCacheBuilder","synthetic":false,"types":[]},{"text":"impl Debug for EventType","synthetic":false,"types":[]},{"text":"impl Debug for Config","synthetic":false,"types":[]},{"text":"impl Debug for InMemoryCache","synthetic":false,"types":[]}];
implementors["twilight_command_parser"] = [{"text":"impl&lt;'a&gt; Debug for Arguments&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for CaseSensitivity","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for CommandParserConfig&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Command&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Parser&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["twilight_embed_builder"] = [{"text":"impl Debug for EmbedAuthorNameError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedAuthorBuilder","synthetic":false,"types":[]},{"text":"impl Debug for EmbedBuildError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedColorError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedDescriptionError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedTitleError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedBuilder","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFieldError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFieldBuilder","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFooterTextError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFooterBuilder","synthetic":false,"types":[]},{"text":"impl Debug for ImageSourceAttachmentError","synthetic":false,"types":[]},{"text":"impl Debug for ImageSourceUrlError","synthetic":false,"types":[]},{"text":"impl Debug for ImageSource","synthetic":false,"types":[]}];
implementors["twilight_gateway"] = [{"text":"impl Debug for ShardSchemeRangeError","synthetic":false,"types":[]},{"text":"impl Debug for ShardScheme","synthetic":false,"types":[]},{"text":"impl Debug for ClusterBuilder","synthetic":false,"types":[]},{"text":"impl Debug for Config","synthetic":false,"types":[]},{"text":"impl Debug for ClusterCommandError","synthetic":false,"types":[]},{"text":"impl Debug for ClusterStartError","synthetic":false,"types":[]},{"text":"impl Debug for Cluster","synthetic":false,"types":[]},{"text":"impl Debug for LargeBotQueue","synthetic":false,"types":[]},{"text":"impl Debug for LocalQueue","synthetic":false,"types":[]},{"text":"impl Debug for StageConversionError","synthetic":false,"types":[]},{"text":"impl Debug for Stage","synthetic":false,"types":[]},{"text":"impl Debug for LargeThresholdError","synthetic":false,"types":[]},{"text":"impl Debug for ShardIdError","synthetic":false,"types":[]},{"text":"impl Debug for ShardBuilder","synthetic":false,"types":[]},{"text":"impl Debug for Config","synthetic":false,"types":[]},{"text":"impl Debug for CommandError","synthetic":false,"types":[]},{"text":"impl Debug for SessionInactiveError","synthetic":false,"types":[]},{"text":"impl Debug for ShardStartError","synthetic":false,"types":[]},{"text":"impl Debug for Information","synthetic":false,"types":[]},{"text":"impl Debug for ResumeSession","synthetic":false,"types":[]},{"text":"impl Debug for Shard","synthetic":false,"types":[]},{"text":"impl Debug for Latency","synthetic":false,"types":[]},{"text":"impl Debug for ShardSink","synthetic":false,"types":[]},{"text":"impl Debug for EventTypeFlags","synthetic":false,"types":[]}];
implementors["twilight_http"] = [{"text":"impl Debug for ErrorCode","synthetic":false,"types":[]},{"text":"impl Debug for ApiError","synthetic":false,"types":[]},{"text":"impl Debug for GeneralApiError","synthetic":false,"types":[]},{"text":"impl Debug for MessageApiError","synthetic":false,"types":[]},{"text":"impl Debug for MessageApiErrorEmbedField","synthetic":false,"types":[]},{"text":"impl Debug for RatelimitedApiError","synthetic":false,"types":[]},{"text":"impl Debug for ClientBuilder","synthetic":false,"types":[]},{"text":"impl Debug for Client","synthetic":false,"types":[]},{"text":"impl Debug for UrlError","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for RatelimitError","synthetic":false,"types":[]},{"text":"impl Debug for RatelimitHeaders","synthetic":false,"types":[]},{"text":"impl Debug for Ratelimiter","synthetic":false,"types":[]},{"text":"impl Debug for Parsed","synthetic":false,"types":[]},{"text":"impl Debug for ExplicitUser","synthetic":false,"types":[]},{"text":"impl Debug for ExplicitRole","synthetic":false,"types":[]},{"text":"impl Debug for Unspecified","synthetic":false,"types":[]},{"text":"impl Debug for ParseTypes","synthetic":false,"types":[]},{"text":"impl Debug for AllowedMentions","synthetic":false,"types":[]},{"text":"impl Debug for CreateMessageError","synthetic":false,"types":[]},{"text":"impl Debug for GetChannelMessagesError","synthetic":false,"types":[]},{"text":"impl Debug for GetChannelMessagesConfiguredError","synthetic":false,"types":[]},{"text":"impl Debug for UpdateMessageError","synthetic":false,"types":[]},{"text":"impl Debug for GetReactionsError","synthetic":false,"types":[]},{"text":"impl Debug for UpdateChannelError","synthetic":false,"types":[]},{"text":"impl Debug for CreateBanError","synthetic":false,"types":[]},{"text":"impl Debug for RoleFieldsError","synthetic":false,"types":[]},{"text":"impl Debug for RoleFieldsBuilder","synthetic":false,"types":[]},{"text":"impl Debug for TextFieldsError","synthetic":false,"types":[]},{"text":"impl Debug for TextFieldsBuilder","synthetic":false,"types":[]},{"text":"impl Debug for VoiceFieldsError","synthetic":false,"types":[]},{"text":"impl Debug for VoiceFieldsBuilder","synthetic":false,"types":[]},{"text":"impl Debug for CategoryFieldsError","synthetic":false,"types":[]},{"text":"impl Debug for CategoryFieldsBuilder","synthetic":false,"types":[]},{"text":"impl Debug for GuildChannelFieldsBuilder","synthetic":false,"types":[]},{"text":"impl Debug for CreateGuildError","synthetic":false,"types":[]},{"text":"impl Debug for RoleFields","synthetic":false,"types":[]},{"text":"impl Debug for GuildChannelFields","synthetic":false,"types":[]},{"text":"impl Debug for CategoryFields","synthetic":false,"types":[]},{"text":"impl Debug for TextFields","synthetic":false,"types":[]},{"text":"impl Debug for VoiceFields","synthetic":false,"types":[]},{"text":"impl Debug for CreateGuildChannelError","synthetic":false,"types":[]},{"text":"impl Debug for CreateGuildPruneError","synthetic":false,"types":[]},{"text":"impl Debug for GetAuditLogError","synthetic":false,"types":[]},{"text":"impl Debug for GetGuildPruneCountError","synthetic":false,"types":[]},{"text":"impl Debug for GetGuildMembersError","synthetic":false,"types":[]},{"text":"impl Debug for UpdateGuildMemberError","synthetic":false,"types":[]},{"text":"impl Debug for UpdateGuildError","synthetic":false,"types":[]},{"text":"impl Debug for GetCurrentUserGuildsError","synthetic":false,"types":[]},{"text":"impl Debug for UpdateCurrentUserError","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogReasonError","synthetic":false,"types":[]},{"text":"impl Debug for EmbedValidationError","synthetic":false,"types":[]},{"text":"impl Debug for Request","synthetic":false,"types":[]},{"text":"impl Debug for PathParseError","synthetic":false,"types":[]},{"text":"impl Debug for Path","synthetic":false,"types":[]},{"text":"impl Debug for Route","synthetic":false,"types":[]}];
implementors["twilight_lavalink"] = [{"text":"impl Debug for ClientError","synthetic":false,"types":[]},{"text":"impl Debug for Lavalink","synthetic":false,"types":[]},{"text":"impl Debug for Opcode","synthetic":false,"types":[]},{"text":"impl Debug for OutgoingEvent","synthetic":false,"types":[]},{"text":"impl Debug for Destroy","synthetic":false,"types":[]},{"text":"impl Debug for Equalizer","synthetic":false,"types":[]},{"text":"impl Debug for EqualizerBand","synthetic":false,"types":[]},{"text":"impl Debug for Pause","synthetic":false,"types":[]},{"text":"impl Debug for Play","synthetic":false,"types":[]},{"text":"impl Debug for Seek","synthetic":false,"types":[]},{"text":"impl Debug for Stop","synthetic":false,"types":[]},{"text":"impl Debug for VoiceUpdate","synthetic":false,"types":[]},{"text":"impl Debug for SlimVoiceServerUpdate","synthetic":false,"types":[]},{"text":"impl Debug for Volume","synthetic":false,"types":[]},{"text":"impl Debug for IncomingEvent","synthetic":false,"types":[]},{"text":"impl Debug for PlayerUpdate","synthetic":false,"types":[]},{"text":"impl Debug for PlayerUpdateState","synthetic":false,"types":[]},{"text":"impl Debug for Stats","synthetic":false,"types":[]},{"text":"impl Debug for StatsCpu","synthetic":false,"types":[]},{"text":"impl Debug for StatsFrames","synthetic":false,"types":[]},{"text":"impl Debug for StatsMemory","synthetic":false,"types":[]},{"text":"impl Debug for TrackEventType","synthetic":false,"types":[]},{"text":"impl Debug for TrackEnd","synthetic":false,"types":[]},{"text":"impl Debug for TrackStart","synthetic":false,"types":[]},{"text":"impl Debug for NodeError","synthetic":false,"types":[]},{"text":"impl Debug for NodeConfig","synthetic":false,"types":[]},{"text":"impl Debug for Resume","synthetic":false,"types":[]},{"text":"impl Debug for Node","synthetic":false,"types":[]},{"text":"impl Debug for PlayerManager","synthetic":false,"types":[]},{"text":"impl Debug for Player","synthetic":false,"types":[]},{"text":"impl Debug for LoadType","synthetic":false,"types":[]},{"text":"impl Debug for Track","synthetic":false,"types":[]},{"text":"impl Debug for TrackInfo","synthetic":false,"types":[]},{"text":"impl Debug for PlaylistInfo","synthetic":false,"types":[]},{"text":"impl Debug for LoadedTracks","synthetic":false,"types":[]},{"text":"impl Debug for FailingAddress","synthetic":false,"types":[]},{"text":"impl Debug for IpBlockType","synthetic":false,"types":[]},{"text":"impl Debug for IpBlock","synthetic":false,"types":[]},{"text":"impl Debug for RoutePlannerType","synthetic":false,"types":[]},{"text":"impl Debug for RoutePlanner","synthetic":false,"types":[]},{"text":"impl Debug for NanoIpRoutePlanner","synthetic":false,"types":[]},{"text":"impl Debug for NanoIpDetails","synthetic":false,"types":[]},{"text":"impl Debug for RotatingIpRoutePlanner","synthetic":false,"types":[]},{"text":"impl Debug for RotatingIpDetails","synthetic":false,"types":[]},{"text":"impl Debug for RotatingNanoIpRoutePlanner","synthetic":false,"types":[]},{"text":"impl Debug for RotatingNanoIpDetails","synthetic":false,"types":[]}];
implementors["twilight_mention"] = [{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for MentionFormat&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for ParseMentionError&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Debug&gt; Debug for MentionIter&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl Debug for MentionType","synthetic":false,"types":[]}];
implementors["twilight_model"] = [{"text":"impl Debug for EmbedAuthor","synthetic":false,"types":[]},{"text":"impl Debug for EmbedField","synthetic":false,"types":[]},{"text":"impl Debug for EmbedFooter","synthetic":false,"types":[]},{"text":"impl Debug for EmbedImage","synthetic":false,"types":[]},{"text":"impl Debug for EmbedProvider","synthetic":false,"types":[]},{"text":"impl Debug for EmbedThumbnail","synthetic":false,"types":[]},{"text":"impl Debug for EmbedVideo","synthetic":false,"types":[]},{"text":"impl Debug for Embed","synthetic":false,"types":[]},{"text":"impl Debug for MessageActivity","synthetic":false,"types":[]},{"text":"impl Debug for MessageActivityType","synthetic":false,"types":[]},{"text":"impl Debug for MessageApplication","synthetic":false,"types":[]},{"text":"impl Debug for MessageFlags","synthetic":false,"types":[]},{"text":"impl Debug for MessageType","synthetic":false,"types":[]},{"text":"impl Debug for MessageReaction","synthetic":false,"types":[]},{"text":"impl Debug for MessageReference","synthetic":false,"types":[]},{"text":"impl Debug for Message","synthetic":false,"types":[]},{"text":"impl Debug for PermissionOverwrite","synthetic":false,"types":[]},{"text":"impl Debug for PermissionOverwriteType","synthetic":false,"types":[]},{"text":"impl Debug for Attachment","synthetic":false,"types":[]},{"text":"impl Debug for CategoryChannel","synthetic":false,"types":[]},{"text":"impl Debug for ChannelMention","synthetic":false,"types":[]},{"text":"impl Debug for ChannelType","synthetic":false,"types":[]},{"text":"impl Debug for Group","synthetic":false,"types":[]},{"text":"impl Debug for PrivateChannel","synthetic":false,"types":[]},{"text":"impl Debug for Reaction","synthetic":false,"types":[]},{"text":"impl Debug for ReactionType","synthetic":false,"types":[]},{"text":"impl Debug for TextChannel","synthetic":false,"types":[]},{"text":"impl Debug for VoiceChannel","synthetic":false,"types":[]},{"text":"impl Debug for Webhook","synthetic":false,"types":[]},{"text":"impl Debug for WebhookType","synthetic":false,"types":[]},{"text":"impl Debug for ConversionError","synthetic":false,"types":[]},{"text":"impl Debug for Channel","synthetic":false,"types":[]},{"text":"impl Debug for GuildChannel","synthetic":false,"types":[]},{"text":"impl Debug for BotConnectionInfo","synthetic":false,"types":[]},{"text":"impl Debug for ConnectionInfo","synthetic":false,"types":[]},{"text":"impl Debug for GatewayEvent","synthetic":false,"types":[]},{"text":"impl Debug for GatewayEventDeserializerOwned","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for GatewayEventDeserializer&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Connected","synthetic":false,"types":[]},{"text":"impl Debug for Connecting","synthetic":false,"types":[]},{"text":"impl Debug for Disconnected","synthetic":false,"types":[]},{"text":"impl Debug for Identifying","synthetic":false,"types":[]},{"text":"impl Debug for Payload","synthetic":false,"types":[]},{"text":"impl Debug for Reconnecting","synthetic":false,"types":[]},{"text":"impl Debug for Resuming","synthetic":false,"types":[]},{"text":"impl Debug for ShardEvent","synthetic":false,"types":[]},{"text":"impl Debug for DispatchEvent","synthetic":false,"types":[]},{"text":"impl Debug for EventType","synthetic":false,"types":[]},{"text":"impl Debug for Event","synthetic":false,"types":[]},{"text":"impl Debug for EventConversionError","synthetic":false,"types":[]},{"text":"impl Debug for Identify","synthetic":false,"types":[]},{"text":"impl Debug for IdentifyInfo","synthetic":false,"types":[]},{"text":"impl Debug for IdentifyProperties","synthetic":false,"types":[]},{"text":"impl Debug for ReactionRemoveEmoji","synthetic":false,"types":[]},{"text":"impl Debug for PartialEmoji","synthetic":false,"types":[]},{"text":"impl Debug for UserIdsError","synthetic":false,"types":[]},{"text":"impl Debug for RequestGuildMembers","synthetic":false,"types":[]},{"text":"impl Debug for RequestGuildMembersInfo","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for RequestGuildMemberId&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Resume","synthetic":false,"types":[]},{"text":"impl Debug for ResumeInfo","synthetic":false,"types":[]},{"text":"impl Debug for UpdateStatus","synthetic":false,"types":[]},{"text":"impl Debug for UpdateStatusInfo","synthetic":false,"types":[]},{"text":"impl Debug for BanAdd","synthetic":false,"types":[]},{"text":"impl Debug for BanRemove","synthetic":false,"types":[]},{"text":"impl Debug for ChannelCreate","synthetic":false,"types":[]},{"text":"impl Debug for ChannelDelete","synthetic":false,"types":[]},{"text":"impl Debug for ChannelPinsUpdate","synthetic":false,"types":[]},{"text":"impl Debug for ChannelUpdate","synthetic":false,"types":[]},{"text":"impl Debug for GuildCreate","synthetic":false,"types":[]},{"text":"impl Debug for GuildDelete","synthetic":false,"types":[]},{"text":"impl Debug for GuildEmojisUpdate","synthetic":false,"types":[]},{"text":"impl Debug for GuildIntegrationsUpdate","synthetic":false,"types":[]},{"text":"impl Debug for GuildUpdate","synthetic":false,"types":[]},{"text":"impl Debug for Heartbeat","synthetic":false,"types":[]},{"text":"impl Debug for InviteCreate","synthetic":false,"types":[]},{"text":"impl Debug for InviteDelete","synthetic":false,"types":[]},{"text":"impl Debug for MemberAdd","synthetic":false,"types":[]},{"text":"impl Debug for MemberChunk","synthetic":false,"types":[]},{"text":"impl Debug for MemberRemove","synthetic":false,"types":[]},{"text":"impl Debug for MemberUpdate","synthetic":false,"types":[]},{"text":"impl Debug for MessageCreate","synthetic":false,"types":[]},{"text":"impl Debug for MessageDelete","synthetic":false,"types":[]},{"text":"impl Debug for MessageDeleteBulk","synthetic":false,"types":[]},{"text":"impl Debug for MessageUpdate","synthetic":false,"types":[]},{"text":"impl Debug for PresenceUpdate","synthetic":false,"types":[]},{"text":"impl Debug for ReactionAdd","synthetic":false,"types":[]},{"text":"impl Debug for ReactionRemove","synthetic":false,"types":[]},{"text":"impl Debug for ReactionRemoveAll","synthetic":false,"types":[]},{"text":"impl Debug for Ready","synthetic":false,"types":[]},{"text":"impl Debug for RoleCreate","synthetic":false,"types":[]},{"text":"impl Debug for RoleDelete","synthetic":false,"types":[]},{"text":"impl Debug for RoleUpdate","synthetic":false,"types":[]},{"text":"impl Debug for TypingStart","synthetic":false,"types":[]},{"text":"impl Debug for UnavailableGuild","synthetic":false,"types":[]},{"text":"impl Debug for UpdateVoiceState","synthetic":false,"types":[]},{"text":"impl Debug for UserUpdate","synthetic":false,"types":[]},{"text":"impl Debug for VoiceServerUpdate","synthetic":false,"types":[]},{"text":"impl Debug for VoiceStateUpdate","synthetic":false,"types":[]},{"text":"impl Debug for WebhooksUpdate","synthetic":false,"types":[]},{"text":"impl Debug for Activity","synthetic":false,"types":[]},{"text":"impl Debug for ActivityAssets","synthetic":false,"types":[]},{"text":"impl Debug for ActivityEmoji","synthetic":false,"types":[]},{"text":"impl Debug for ActivityFlags","synthetic":false,"types":[]},{"text":"impl Debug for ActivityParty","synthetic":false,"types":[]},{"text":"impl Debug for ActivitySecrets","synthetic":false,"types":[]},{"text":"impl Debug for ActivityTimestamps","synthetic":false,"types":[]},{"text":"impl Debug for ActivityType","synthetic":false,"types":[]},{"text":"impl Debug for ClientStatus","synthetic":false,"types":[]},{"text":"impl Debug for Status","synthetic":false,"types":[]},{"text":"impl Debug for Presence","synthetic":false,"types":[]},{"text":"impl Debug for UserOrId","synthetic":false,"types":[]},{"text":"impl Debug for PresenceIntermediary","synthetic":false,"types":[]},{"text":"impl Debug for PresenceDeserializer","synthetic":false,"types":[]},{"text":"impl Debug for PresenceMapDeserializer","synthetic":false,"types":[]},{"text":"impl Debug for Intents","synthetic":false,"types":[]},{"text":"impl Debug for OpCode","synthetic":false,"types":[]},{"text":"impl Debug for SessionStartLimit","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogChange","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogChangeKey","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogEntry","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogEvent","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogOptionalEntryInfo","synthetic":false,"types":[]},{"text":"impl Debug for PartialGuildIntegration","synthetic":false,"types":[]},{"text":"impl Debug for AuditLog","synthetic":false,"types":[]},{"text":"impl Debug for Member","synthetic":false,"types":[]},{"text":"impl Debug for MemberDeserializer","synthetic":false,"types":[]},{"text":"impl Debug for MemberMapDeserializer","synthetic":false,"types":[]},{"text":"impl Debug for Ban","synthetic":false,"types":[]},{"text":"impl Debug for DefaultMessageNotificationLevel","synthetic":false,"types":[]},{"text":"impl Debug for Emoji","synthetic":false,"types":[]},{"text":"impl Debug for ExplicitContentFilter","synthetic":false,"types":[]},{"text":"impl Debug for GuildInfo","synthetic":false,"types":[]},{"text":"impl Debug for GuildIntegration","synthetic":false,"types":[]},{"text":"impl Debug for IntegrationAccount","synthetic":false,"types":[]},{"text":"impl Debug for IntegrationExpireBehavior","synthetic":false,"types":[]},{"text":"impl Debug for MfaLevel","synthetic":false,"types":[]},{"text":"impl Debug for PartialGuild","synthetic":false,"types":[]},{"text":"impl Debug for PartialMember","synthetic":false,"types":[]},{"text":"impl Debug for Permissions","synthetic":false,"types":[]},{"text":"impl Debug for PremiumTier","synthetic":false,"types":[]},{"text":"impl Debug for GuildPreview","synthetic":false,"types":[]},{"text":"impl Debug for GuildPrune","synthetic":false,"types":[]},{"text":"impl Debug for Role","synthetic":false,"types":[]},{"text":"impl Debug for GuildStatus","synthetic":false,"types":[]},{"text":"impl Debug for SystemChannelFlags","synthetic":false,"types":[]},{"text":"impl Debug for UnavailableGuild","synthetic":false,"types":[]},{"text":"impl Debug for VerificationLevel","synthetic":false,"types":[]},{"text":"impl Debug for GuildWidget","synthetic":false,"types":[]},{"text":"impl Debug for Guild","synthetic":false,"types":[]},{"text":"impl Debug for ApplicationId","synthetic":false,"types":[]},{"text":"impl Debug for AttachmentId","synthetic":false,"types":[]},{"text":"impl Debug for AuditLogEntryId","synthetic":false,"types":[]},{"text":"impl Debug for ChannelId","synthetic":false,"types":[]},{"text":"impl Debug for EmojiId","synthetic":false,"types":[]},{"text":"impl Debug for GenericId","synthetic":false,"types":[]},{"text":"impl Debug for GuildId","synthetic":false,"types":[]},{"text":"impl Debug for IntegrationId","synthetic":false,"types":[]},{"text":"impl Debug for MessageId","synthetic":false,"types":[]},{"text":"impl Debug for RoleId","synthetic":false,"types":[]},{"text":"impl Debug for UserId","synthetic":false,"types":[]},{"text":"impl Debug for WebhookId","synthetic":false,"types":[]},{"text":"impl Debug for InviteGuild","synthetic":false,"types":[]},{"text":"impl Debug for InviteMetadata","synthetic":false,"types":[]},{"text":"impl Debug for TargetUserType","synthetic":false,"types":[]},{"text":"impl Debug for Invite","synthetic":false,"types":[]},{"text":"impl Debug for SkuId","synthetic":false,"types":[]},{"text":"impl Debug for TeamId","synthetic":false,"types":[]},{"text":"impl Debug for TeamMember","synthetic":false,"types":[]},{"text":"impl Debug for TeamMembershipState","synthetic":false,"types":[]},{"text":"impl Debug for Team","synthetic":false,"types":[]},{"text":"impl Debug for CurrentApplicationInfo","synthetic":false,"types":[]},{"text":"impl Debug for Connection","synthetic":false,"types":[]},{"text":"impl Debug for ConnectionVisibility","synthetic":false,"types":[]},{"text":"impl Debug for CurrentUser","synthetic":false,"types":[]},{"text":"impl Debug for UserFlags","synthetic":false,"types":[]},{"text":"impl Debug for PremiumType","synthetic":false,"types":[]},{"text":"impl Debug for UserProfile","synthetic":false,"types":[]},{"text":"impl Debug for User","synthetic":false,"types":[]},{"text":"impl Debug for VoiceState","synthetic":false,"types":[]},{"text":"impl Debug for VoiceRegion","synthetic":false,"types":[]}];
implementors["twilight_standby"] = [{"text":"impl Debug for WaitForEventFuture","synthetic":false,"types":[]},{"text":"impl Debug for WaitForEventStream","synthetic":false,"types":[]},{"text":"impl Debug for WaitForGuildEventFuture","synthetic":false,"types":[]},{"text":"impl Debug for WaitForGuildEventStream","synthetic":false,"types":[]},{"text":"impl Debug for WaitForMessageFuture","synthetic":false,"types":[]},{"text":"impl Debug for WaitForMessageStream","synthetic":false,"types":[]},{"text":"impl Debug for WaitForReactionFuture","synthetic":false,"types":[]},{"text":"impl Debug for WaitForReactionStream","synthetic":false,"types":[]},{"text":"impl Debug for Standby","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()