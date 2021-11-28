/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum ChannelCloseSummaryClosureType {
  COOPERATIVE_CLOSE = 'COOPERATIVE_CLOSE',
  LOCAL_FORCE_CLOSE = 'LOCAL_FORCE_CLOSE',
  REMOTE_FORCE_CLOSE = 'REMOTE_FORCE_CLOSE',
  BREACH_CLOSE = 'BREACH_CLOSE',
  FUNDING_CANCELED = 'FUNDING_CANCELED',
  ABANDONED = 'ABANDONED'
}

export enum ChannelEventUpdateUpdateType {
  OPEN_CHANNEL = 'OPEN_CHANNEL',
  CLOSED_CHANNEL = 'CLOSED_CHANNEL',
  ACTIVE_CHANNEL = 'ACTIVE_CHANNEL',
  INACTIVE_CHANNEL = 'INACTIVE_CHANNEL',
  PENDING_OPEN_CHANNEL = 'PENDING_OPEN_CHANNEL',
  FULLY_RESOLVED_CHANNEL = 'FULLY_RESOLVED_CHANNEL'
}

/**
  *  - RESERVED: The numbers assigned in this enumeration match the failure codes as
  defined in BOLT #4. Because protobuf 3 requires enums to start with 0,
  a RESERVED value is added.
   - INTERNAL_FAILURE: An internal error occurred.
   - UNKNOWN_FAILURE: The error source is known, but the failure itself couldn't be decoded.
   - UNREADABLE_FAILURE: An unreadable failure result is returned if the received failure message
  cannot be decrypted. In that case the error source is unknown.
  */
export enum FailureFailureCode {
  RESERVED = 'RESERVED',
  INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS = 'INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS',
  INCORRECT_PAYMENT_AMOUNT = 'INCORRECT_PAYMENT_AMOUNT',
  FINAL_INCORRECT_CLTV_EXPIRY = 'FINAL_INCORRECT_CLTV_EXPIRY',
  FINAL_INCORRECT_HTLC_AMOUNT = 'FINAL_INCORRECT_HTLC_AMOUNT',
  FINAL_EXPIRY_TOO_SOON = 'FINAL_EXPIRY_TOO_SOON',
  INVALID_REALM = 'INVALID_REALM',
  EXPIRY_TOO_SOON = 'EXPIRY_TOO_SOON',
  INVALID_ONION_VERSION = 'INVALID_ONION_VERSION',
  INVALID_ONION_HMAC = 'INVALID_ONION_HMAC',
  INVALID_ONION_KEY = 'INVALID_ONION_KEY',
  AMOUNT_BELOW_MINIMUM = 'AMOUNT_BELOW_MINIMUM',
  FEE_INSUFFICIENT = 'FEE_INSUFFICIENT',
  INCORRECT_CLTV_EXPIRY = 'INCORRECT_CLTV_EXPIRY',
  CHANNEL_DISABLED = 'CHANNEL_DISABLED',
  TEMPORARY_CHANNEL_FAILURE = 'TEMPORARY_CHANNEL_FAILURE',
  REQUIRED_NODE_FEATURE_MISSING = 'REQUIRED_NODE_FEATURE_MISSING',
  REQUIRED_CHANNEL_FEATURE_MISSING = 'REQUIRED_CHANNEL_FEATURE_MISSING',
  UNKNOWN_NEXT_PEER = 'UNKNOWN_NEXT_PEER',
  TEMPORARY_NODE_FAILURE = 'TEMPORARY_NODE_FAILURE',
  PERMANENT_NODE_FAILURE = 'PERMANENT_NODE_FAILURE',
  PERMANENT_CHANNEL_FAILURE = 'PERMANENT_CHANNEL_FAILURE',
  EXPIRY_TOO_FAR = 'EXPIRY_TOO_FAR',
  MPP_TIMEOUT = 'MPP_TIMEOUT',
  INVALID_ONION_PAYLOAD = 'INVALID_ONION_PAYLOAD',
  INTERNAL_FAILURE = 'INTERNAL_FAILURE',
  UNKNOWN_FAILURE = 'UNKNOWN_FAILURE',
  UNREADABLE_FAILURE = 'UNREADABLE_FAILURE'
}

export enum ForceClosedChannelAnchorState {
  LIMBO = 'LIMBO',
  RECOVERED = 'RECOVERED',
  LOST = 'LOST'
}

export enum HTLCAttemptHTLCStatus {
  IN_FLIGHT = 'IN_FLIGHT',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED'
}

export enum InvoiceInvoiceState {
  OPEN = 'OPEN',
  SETTLED = 'SETTLED',
  CANCELED = 'CANCELED',
  ACCEPTED = 'ACCEPTED'
}

export enum PaymentPaymentStatus {
  UNKNOWN = 'UNKNOWN',
  IN_FLIGHT = 'IN_FLIGHT',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED'
}

export enum PeerEventEventType {
  PEER_ONLINE = 'PEER_ONLINE',
  PEER_OFFLINE = 'PEER_OFFLINE'
}

/**
  *  - UNKNOWN_SYNC: Denotes that we cannot determine the peer's current sync type.
   - ACTIVE_SYNC: Denotes that we are actively receiving new graph updates from the peer.
   - PASSIVE_SYNC: Denotes that we are not receiving new graph updates from the peer.
   - PINNED_SYNC: Denotes that this peer is pinned into an active sync.
  */
export enum PeerSyncType {
  UNKNOWN_SYNC = 'UNKNOWN_SYNC',
  ACTIVE_SYNC = 'ACTIVE_SYNC',
  PASSIVE_SYNC = 'PASSIVE_SYNC',
  PINNED_SYNC = 'PINNED_SYNC'
}

export interface PendingChannelsResponseClosedChannel {
  channel?: PendingChannelsResponsePendingChannel;
  closing_txid?: string;
}

export interface PendingChannelsResponseCommitments {
  /** Hash of the local version of the commitment tx. */
  local_txid?: string;

  /** Hash of the remote version of the commitment tx. */
  remote_txid?: string;

  /** Hash of the remote pending version of the commitment tx. */
  remote_pending_txid?: string;

  /**
   * The amount in satoshis calculated to be paid in fees for the local
   * commitment.
   * @format uint64
   */
  local_commit_fee_sat?: string;

  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * commitment.
   * @format uint64
   */
  remote_commit_fee_sat?: string;

  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * pending commitment.
   * @format uint64
   */
  remote_pending_commit_fee_sat?: string;
}

export interface PendingChannelsResponseForceClosedChannel {
  channel?: PendingChannelsResponsePendingChannel;
  closing_txid?: string;

  /** @format int64 */
  limbo_balance?: string;

  /** @format int64 */
  maturity_height?: number;

  /**
   * Remaining # of blocks until the commitment output can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   * @format int32
   */
  blocks_til_maturity?: number;

  /** @format int64 */
  recovered_balance?: string;
  pending_htlcs?: LnrpcPendingHTLC[];
  anchor?: ForceClosedChannelAnchorState;
}

export interface PendingChannelsResponsePendingChannel {
  remote_node_pub?: string;
  channel_point?: string;

  /** @format int64 */
  capacity?: string;

  /** @format int64 */
  local_balance?: string;

  /** @format int64 */
  remote_balance?: string;

  /**
   * The minimum satoshis this node is required to reserve in its
   * balance.
   * @format int64
   */
  local_chan_reserve_sat?: string;

  /**
   * The minimum satoshis the other node is required to reserve in its
   * balance.
   * @format int64
   */
  remote_chan_reserve_sat?: string;

  /** The party that initiated opening the channel. */
  initiator?: LnrpcInitiator;

  /** The commitment type used by this channel. */
  commitment_type?: LnrpcCommitmentType;
}

export interface PendingChannelsResponsePendingOpenChannel {
  channel?: PendingChannelsResponsePendingChannel;

  /** @format int64 */
  confirmation_height?: number;

  /**
   * The amount calculated to be paid in fees for the current set of
   * commitment transactions. The fee amount is persisted with the channel
   * in order to allow the fee amount to be removed and recalculated with
   * each channel state update, including updates that happen after a system
   * restart.
   * @format int64
   */
  commit_fee?: string;

  /** @format int64 */
  commit_weight?: string;

  /**
   * The required number of satoshis per kilo-weight that the requester will
   * pay at all times, for both the funding transaction and commitment
   * transaction. This value can later be updated once the channel is open.
   * @format int64
   */
  fee_per_kw?: string;
}

export interface PendingChannelsResponseWaitingCloseChannel {
  channel?: PendingChannelsResponsePendingChannel;

  /** @format int64 */
  limbo_balance?: string;

  /**
   * A list of valid commitment transactions. Any of these can confirm at
   * this point.
   */
  commitments?: PendingChannelsResponseCommitments;
}

/**
 * Details specific to AMP HTLCs.
 */
export interface LnrpcAMP {
  /**
   * An n-of-n secret share of the root seed from which child payment hashes
   * and preimages are derived.
   * @format byte
   */
  root_share?: string;

  /**
   * An identifier for the HTLC set that this HTLC belongs to.
   * @format byte
   */
  set_id?: string;

  /**
   * A nonce used to randomize the child preimage and child hash from a given
   * root_share.
   * @format int64
   */
  child_index?: number;

  /**
   * The payment hash of the AMP HTLC.
   * @format byte
   */
  hash?: string;

  /**
   * The preimage used to settle this AMP htlc. This field will only be
   * populated if the invoice is in InvoiceState_ACCEPTED or
   * InvoiceState_SETTLED.
   * @format byte
   */
  preimage?: string;
}

export interface LnrpcAMPRecord {
  /** @format byte */
  root_share?: string;

  /** @format byte */
  set_id?: string;

  /** @format int64 */
  child_index?: number;
}

export type LnrpcAbandonChannelResponse = object;

export interface LnrpcAddInvoiceResponse {
  /** @format byte */
  r_hash?: string;

  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  payment_request?: string;

  /**
   * The "add" index of this invoice. Each newly created invoice will increment
   * this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all added
   * invoices with an add_index greater than this one.
   * @format uint64
   */
  add_index?: string;

  /**
   * The payment address of the generated invoice. This value should be used
   * in all payments for this invoice as we require it for end to end
   * security.
   * @format byte
   */
  payment_addr?: string;
}

/**
  * - `p2wkh`: Pay to witness key hash (`WITNESS_PUBKEY_HASH` = 0)
  - `np2wkh`: Pay to nested witness key hash (`NESTED_PUBKEY_HASH` = 1)
  */
export enum LnrpcAddressType {
  WITNESS_PUBKEY_HASH = 'WITNESS_PUBKEY_HASH',
  NESTED_PUBKEY_HASH = 'NESTED_PUBKEY_HASH',
  UNUSED_WITNESS_PUBKEY_HASH = 'UNUSED_WITNESS_PUBKEY_HASH',
  UNUSED_NESTED_PUBKEY_HASH = 'UNUSED_NESTED_PUBKEY_HASH'
}

export interface LnrpcAmount {
  /**
   * Value denominated in satoshis.
   * @format uint64
   */
  sat?: string;

  /**
   * Value denominated in milli-satoshis.
   * @format uint64
   */
  msat?: string;
}

export interface LnrpcBakeMacaroonRequest {
  /** The list of permissions the new macaroon should grant. */
  permissions?: LnrpcMacaroonPermission[];

  /**
   * The root key ID used to create the macaroon, must be a positive integer.
   * @format uint64
   */
  root_key_id?: string;
}

export interface LnrpcBakeMacaroonResponse {
  /** The hex encoded macaroon, serialized in binary format. */
  macaroon?: string;
}

export interface LnrpcChain {
  chain?: string;
  network?: string;
}

export interface LnrpcChanBackupSnapshot {
  /**
   * The set of new channels that have been added since the last channel backup
   * snapshot was requested.
   */
  single_chan_backups?: LnrpcChannelBackups;

  /**
   * A multi-channel backup that covers all open channels currently known to
   * lnd.
   */
  multi_chan_backup?: LnrpcMultiChanBackup;
}

export interface LnrpcChanPointShim {
  /**
   * The size of the pre-crafted output to be used as the channel point for this
   * channel funding.
   * @format int64
   */
  amt?: string;

  /** The target channel point to refrence in created commitment transactions. */
  chan_point?: LnrpcChannelPoint;

  /** Our local key to use when creating the multi-sig output. */
  local_key?: LnrpcKeyDescriptor;

  /**
   * The key of the remote party to use when creating the multi-sig output.
   * @format byte
   */
  remote_key?: string;

  /**
   * If non-zero, then this will be used as the pending channel ID on the wire
   * protocol to initate the funding request. This is an optional field, and
   * should only be set if the responder is already expecting a specific pending
   * channel ID.
   * @format byte
   */
  pending_chan_id?: string;

  /**
   * This uint32 indicates if this channel is to be considered 'frozen'. A frozen
   * channel does not allow a cooperative channel close by the initiator. The
   * thaw_height is the height that this restriction stops applying to the
   * channel. The height can be interpreted in two ways: as a relative height if
   * the value is less than 500,000, or as an absolute height otherwise.
   * @format int64
   */
  thaw_height?: number;
}

export interface LnrpcChannel {
  active?: boolean;
  remote_pubkey?: string;

  /**
   * The outpoint (txid:index) of the funding transaction. With this value, Bob
   * will be able to generate a signature for Alice's version of the commitment
   * transaction.
   */
  channel_point?: string;

  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   * @format uint64
   */
  chan_id?: string;

  /** @format int64 */
  capacity?: string;

  /** @format int64 */
  local_balance?: string;

  /** @format int64 */
  remote_balance?: string;

  /**
   * The amount calculated to be paid in fees for the current set of commitment
   * transactions. The fee amount is persisted with the channel in order to
   * allow the fee amount to be removed and recalculated with each channel state
   * update, including updates that happen after a system restart.
   * @format int64
   */
  commit_fee?: string;

  /** @format int64 */
  commit_weight?: string;

  /**
   * The required number of satoshis per kilo-weight that the requester will pay
   * at all times, for both the funding transaction and commitment transaction.
   * This value can later be updated once the channel is open.
   * @format int64
   */
  fee_per_kw?: string;

  /** @format int64 */
  unsettled_balance?: string;

  /**
   * The total number of satoshis we've sent within this channel.
   * @format int64
   */
  total_satoshis_sent?: string;

  /**
   * The total number of satoshis we've received within this channel.
   * @format int64
   */
  total_satoshis_received?: string;

  /**
   * The total number of updates conducted within this channel.
   * @format uint64
   */
  num_updates?: string;

  /** The list of active, uncleared HTLCs currently pending within the channel. */
  pending_htlcs?: LnrpcHTLC[];

  /**
   * Deprecated. The CSV delay expressed in relative blocks. If the channel is
   * force closed, we will need to wait for this many blocks before we can regain
   * our funds.
   * @format int64
   */
  csv_delay?: number;

  /** Whether this channel is advertised to the network or not. */
  private?: boolean;

  /** True if we were the ones that created the channel. */
  initiator?: boolean;

  /** A set of flags showing the current state of the channel. */
  chan_status_flags?: string;

  /**
   * Deprecated. The minimum satoshis this node is required to reserve in its
   * balance.
   * @format int64
   */
  local_chan_reserve_sat?: string;

  /**
   * Deprecated. The minimum satoshis the other node is required to reserve in
   * its balance.
   * @format int64
   */
  remote_chan_reserve_sat?: string;

  /** Deprecated. Use commitment_type. */
  static_remote_key?: boolean;

  /** The commitment type used by this channel. */
  commitment_type?: LnrpcCommitmentType;

  /**
   * The number of seconds that the channel has been monitored by the channel
   * scoring system. Scores are currently not persisted, so this value may be
   * less than the lifetime of the channel [EXPERIMENTAL].
   * @format int64
   */
  lifetime?: string;

  /**
   * The number of seconds that the remote peer has been observed as being online
   * by the channel scoring system over the lifetime of the channel
   * [EXPERIMENTAL].
   * @format int64
   */
  uptime?: string;

  /**
   * Close address is the address that we will enforce payout to on cooperative
   * close if the channel was opened utilizing option upfront shutdown. This
   * value can be set on channel open by setting close_address in an open channel
   * request. If this value is not set, you can still choose a payout address by
   * cooperatively closing with the delivery_address field set.
   */
  close_address?: string;

  /**
   * The amount that the initiator of the channel optionally pushed to the remote
   * party on channel open. This amount will be zero if the channel initiator did
   * not push any funds to the remote peer. If the initiator field is true, we
   * pushed this amount to our peer, if it is false, the remote peer pushed this
   * amount to us.
   * @format uint64
   */
  push_amount_sat?: string;

  /**
   * This uint32 indicates if this channel is to be considered 'frozen'. A
   * frozen channel doest not allow a cooperative channel close by the
   * initiator. The thaw_height is the height that this restriction stops
   * applying to the channel. This field is optional, not setting it or using a
   * value of zero will mean the channel has no additional restrictions. The
   * height can be interpreted in two ways: as a relative height if the value is
   * less than 500,000, or as an absolute height otherwise.
   * @format int64
   */
  thaw_height?: number;

  /** List constraints for the local node. */
  local_constraints?: LnrpcChannelConstraints;

  /** List constraints for the remote node. */
  remote_constraints?: LnrpcChannelConstraints;
}

export interface LnrpcChannelAcceptRequest {
  /**
   * The pubkey of the node that wishes to open an inbound channel.
   * @format byte
   */
  node_pubkey?: string;

  /**
   * The hash of the genesis block that the proposed channel resides in.
   * @format byte
   */
  chain_hash?: string;

  /**
   * The pending channel id.
   * @format byte
   */
  pending_chan_id?: string;

  /**
   * The funding amount in satoshis that initiator wishes to use in the
   * channel.
   * @format uint64
   */
  funding_amt?: string;

  /**
   * The push amount of the proposed channel in millisatoshis.
   * @format uint64
   */
  push_amt?: string;

  /**
   * The dust limit of the initiator's commitment tx.
   * @format uint64
   */
  dust_limit?: string;

  /**
   * The maximum amount of coins in millisatoshis that can be pending in this
   * channel.
   * @format uint64
   */
  max_value_in_flight?: string;

  /**
   * The minimum amount of satoshis the initiator requires us to have at all
   * times.
   * @format uint64
   */
  channel_reserve?: string;

  /**
   * The smallest HTLC in millisatoshis that the initiator will accept.
   * @format uint64
   */
  min_htlc?: string;

  /**
   * The initial fee rate that the initiator suggests for both commitment
   * transactions.
   * @format uint64
   */
  fee_per_kw?: string;

  /**
   * The number of blocks to use for the relative time lock in the pay-to-self
   * output of both commitment transactions.
   * @format int64
   */
  csv_delay?: number;

  /**
   * The total number of incoming HTLC's that the initiator will accept.
   * @format int64
   */
  max_accepted_htlcs?: number;

  /**
   * A bit-field which the initiator uses to specify proposed channel
   * behavior.
   * @format int64
   */
  channel_flags?: number;
}

export interface LnrpcChannelAcceptResponse {
  /** Whether or not the client accepts the channel. */
  accept?: boolean;

  /**
   * The pending channel id to which this response applies.
   * @format byte
   */
  pending_chan_id?: string;

  /**
   * An optional error to send the initiating party to indicate why the channel
   * was rejected. This field *should not* contain sensitive information, it will
   * be sent to the initiating party. This field should only be set if accept is
   * false, the channel will be rejected if an error is set with accept=true
   * because the meaning of this response is ambiguous. Limited to 500
   * characters.
   */
  error?: string;

  /**
   * The upfront shutdown address to use if the initiating peer supports option
   * upfront shutdown script (see ListPeers for the features supported). Note
   * that the channel open will fail if this value is set for a peer that does
   * not support this feature bit.
   */
  upfront_shutdown?: string;

  /**
   * The csv delay (in blocks) that we require for the remote party.
   * @format int64
   */
  csv_delay?: number;

  /**
   * The reserve amount in satoshis that we require the remote peer to adhere to.
   * We require that the remote peer always have some reserve amount allocated to
   * them so that there is always a disincentive to broadcast old state (if they
   * hold 0 sats on their side of the channel, there is nothing to lose).
   * @format uint64
   */
  reserve_sat?: string;

  /**
   * The maximum amount of funds in millisatoshis that we allow the remote peer
   * to have in outstanding htlcs.
   * @format uint64
   */
  in_flight_max_msat?: string;

  /**
   * The maximum number of htlcs that the remote peer can offer us.
   * @format int64
   */
  max_htlc_count?: number;

  /**
   * The minimum value in millisatoshis for incoming htlcs on the channel.
   * @format uint64
   */
  min_htlc_in?: string;

  /**
   * The number of confirmations we require before we consider the channel open.
   * @format int64
   */
  min_accept_depth?: number;
}

export interface LnrpcChannelBackup {
  /** Identifies the channel that this backup belongs to. */
  chan_point?: LnrpcChannelPoint;

  /**
   * Is an encrypted single-chan backup. this can be passed to
   * RestoreChannelBackups, or the WalletUnlocker Init and Unlock methods in
   * order to trigger the recovery protocol. When using REST, this field must be
   * encoded as base64.
   * @format byte
   */
  chan_backup?: string;
}

export interface LnrpcChannelBackups {
  /** A set of single-chan static channel backups. */
  chan_backups?: LnrpcChannelBackup[];
}

export interface LnrpcChannelBalanceResponse {
  /** @format int64 */
  balance?: string;

  /** @format int64 */
  pending_open_balance?: string;

  /** Sum of channels local balances. */
  local_balance?: LnrpcAmount;

  /** Sum of channels remote balances. */
  remote_balance?: LnrpcAmount;

  /** Sum of channels local unsettled balances. */
  unsettled_local_balance?: LnrpcAmount;

  /** Sum of channels remote unsettled balances. */
  unsettled_remote_balance?: LnrpcAmount;

  /** Sum of channels pending local balances. */
  pending_open_local_balance?: LnrpcAmount;

  /** Sum of channels pending remote balances. */
  pending_open_remote_balance?: LnrpcAmount;
}

export interface LnrpcChannelCloseSummary {
  /** The outpoint (txid:index) of the funding transaction. */
  channel_point?: string;

  /**
   * The unique channel ID for the channel.
   * @format uint64
   */
  chan_id?: string;

  /** The hash of the genesis block that this channel resides within. */
  chain_hash?: string;

  /** The txid of the transaction which ultimately closed this channel. */
  closing_tx_hash?: string;

  /** Public key of the remote peer that we formerly had a channel with. */
  remote_pubkey?: string;

  /**
   * Total capacity of the channel.
   * @format int64
   */
  capacity?: string;

  /**
   * Height at which the funding transaction was spent.
   * @format int64
   */
  close_height?: number;

  /** @format int64 */
  settled_balance?: string;

  /** @format int64 */
  time_locked_balance?: string;

  /** Details on how the channel was closed. */
  close_type?: ChannelCloseSummaryClosureType;

  /**
   * Open initiator is the party that initiated opening the channel. Note that
   * this value may be unknown if the channel was closed before we migrated to
   * store open channel information after close.
   */
  open_initiator?: LnrpcInitiator;

  /**
   * Close initiator indicates which party initiated the close. This value will
   * be unknown for channels that were cooperatively closed before we started
   * tracking cooperative close initiators. Note that this indicates which party
   * initiated a close, and it is possible for both to initiate cooperative or
   * force closes, although only one party's close will be confirmed on chain.
   */
  close_initiator?: LnrpcInitiator;
  resolutions?: LnrpcResolution[];
}

export interface LnrpcChannelCloseUpdate {
  /** @format byte */
  closing_txid?: string;
  success?: boolean;
}

export interface LnrpcChannelConstraints {
  /**
   * The CSV delay expressed in relative blocks. If the channel is force closed,
   * we will need to wait for this many blocks before we can regain our funds.
   * @format int64
   */
  csv_delay?: number;

  /**
   * The minimum satoshis this node is required to reserve in its balance.
   * @format uint64
   */
  chan_reserve_sat?: string;

  /**
   * The dust limit (in satoshis) of the initiator's commitment tx.
   * @format uint64
   */
  dust_limit_sat?: string;

  /**
   * The maximum amount of coins in millisatoshis that can be pending in this
   * channel.
   * @format uint64
   */
  max_pending_amt_msat?: string;

  /**
   * The smallest HTLC in millisatoshis that the initiator will accept.
   * @format uint64
   */
  min_htlc_msat?: string;

  /**
   * The total number of incoming HTLC's that the initiator will accept.
   * @format int64
   */
  max_accepted_htlcs?: number;
}

/**
  * A fully authenticated channel along with all its unique attributes.
  Once an authenticated channel announcement has been processed on the network,
  then an instance of ChannelEdgeInfo encapsulating the channels attributes is
  stored. The other portions relevant to routing policy of a channel are stored
  within a ChannelEdgePolicy for each direction of the channel.
  */
export interface LnrpcChannelEdge {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   * @format uint64
   */
  channel_id?: string;
  chan_point?: string;

  /** @format int64 */
  last_update?: number;
  node1_pub?: string;
  node2_pub?: string;

  /** @format int64 */
  capacity?: string;
  node1_policy?: LnrpcRoutingPolicy;
  node2_policy?: LnrpcRoutingPolicy;
}

export interface LnrpcChannelEdgeUpdate {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   * @format uint64
   */
  chan_id?: string;
  chan_point?: LnrpcChannelPoint;

  /** @format int64 */
  capacity?: string;
  routing_policy?: LnrpcRoutingPolicy;
  advertising_node?: string;
  connecting_node?: string;
}

export interface LnrpcChannelEventUpdate {
  open_channel?: LnrpcChannel;
  closed_channel?: LnrpcChannelCloseSummary;
  active_channel?: LnrpcChannelPoint;
  inactive_channel?: LnrpcChannelPoint;
  pending_open_channel?: LnrpcPendingUpdate;
  fully_resolved_channel?: LnrpcChannelPoint;
  type?: ChannelEventUpdateUpdateType;
}

export interface LnrpcChannelFeeReport {
  /**
   * The short channel id that this fee report belongs to.
   * @format uint64
   */
  chan_id?: string;

  /** The channel that this fee report belongs to. */
  channel_point?: string;

  /**
   * The base fee charged regardless of the number of milli-satoshis sent.
   * @format int64
   */
  base_fee_msat?: string;

  /**
   * The amount charged per milli-satoshis transferred expressed in
   * millionths of a satoshi.
   * @format int64
   */
  fee_per_mil?: string;

  /**
   * The effective fee rate in milli-satoshis. Computed by dividing the
   * fee_per_mil value by 1 million.
   * @format double
   */
  fee_rate?: number;
}

/**
 * Returns a new instance of the directed channel graph.
 */
export interface LnrpcChannelGraph {
  nodes?: LnrpcLightningNode[];
  edges?: LnrpcChannelEdge[];
}

export interface LnrpcChannelOpenUpdate {
  channel_point?: LnrpcChannelPoint;
}

export interface LnrpcChannelPoint {
  /**
   * Txid of the funding transaction. When using REST, this field must be
   * encoded as base64.
   * @format byte
   */
  funding_txid_bytes?: string;

  /**
   * Hex-encoded string representing the byte-reversed hash of the funding
   * transaction.
   */
  funding_txid_str?: string;

  /** @format int64 */
  output_index?: number;
}

export interface LnrpcChannelUpdate {
  /**
   * The signature that validates the announced data and proves the ownership
   * of node id.
   * @format byte
   */
  signature?: string;

  /**
   * The target chain that this channel was opened within. This value
   * should be the genesis hash of the target chain. Along with the short
   * channel ID, this uniquely identifies the channel globally in a
   * blockchain.
   * @format byte
   */
  chain_hash?: string;

  /**
   * The unique description of the funding transaction.
   * @format uint64
   */
  chan_id?: string;

  /**
   * A timestamp that allows ordering in the case of multiple announcements.
   * We should ignore the message if timestamp is not greater than the
   * last-received.
   * @format int64
   */
  timestamp?: number;

  /**
   * The bitfield that describes whether optional fields are present in this
   * update. Currently, the least-significant bit must be set to 1 if the
   * optional field MaxHtlc is present.
   * @format int64
   */
  message_flags?: number;

  /**
   * The bitfield that describes additional meta-data concerning how the
   * update is to be interpreted. Currently, the least-significant bit must be
   * set to 0 if the creating node corresponds to the first node in the
   * previously sent channel announcement and 1 otherwise. If the second bit
   * is set, then the channel is set to be disabled.
   * @format int64
   */
  channel_flags?: number;

  /**
   * The minimum number of blocks this node requires to be added to the expiry
   * of HTLCs. This is a security parameter determined by the node operator.
   * This value represents the required gap between the time locks of the
   * incoming and outgoing HTLC's set to this node.
   * @format int64
   */
  time_lock_delta?: number;

  /**
   * The minimum HTLC value which will be accepted.
   * @format uint64
   */
  htlc_minimum_msat?: string;

  /**
   * The base fee that must be used for incoming HTLC's to this particular
   * channel. This value will be tacked onto the required for a payment
   * independent of the size of the payment.
   * @format int64
   */
  base_fee?: number;

  /**
   * The fee rate that will be charged per millionth of a satoshi.
   * @format int64
   */
  fee_rate?: number;

  /**
   * The maximum HTLC value which will be accepted.
   * @format uint64
   */
  htlc_maximum_msat?: string;

  /**
   * The set of data that was appended to this message, some of which we may
   * not actually know how to iterate or parse. By holding onto this data, we
   * ensure that we're able to properly validate the set of signatures that
   * cover these new fields, and ensure we're able to make upgrades to the
   * network in a forwards compatible manner.
   * @format byte
   */
  extra_opaque_data?: string;
}

export interface LnrpcCloseStatusUpdate {
  close_pending?: LnrpcPendingUpdate;
  chan_close?: LnrpcChannelCloseUpdate;
}

export interface LnrpcClosedChannelUpdate {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   * @format uint64
   */
  chan_id?: string;

  /** @format int64 */
  capacity?: string;

  /** @format int64 */
  closed_height?: number;
  chan_point?: LnrpcChannelPoint;
}

export interface LnrpcClosedChannelsResponse {
  channels?: LnrpcChannelCloseSummary[];
}

/**
  *  - UNKNOWN_COMMITMENT_TYPE: Returned when the commitment type isn't known or unavailable.
   - LEGACY: A channel using the legacy commitment format having tweaked to_remote
  keys.
   - STATIC_REMOTE_KEY: A channel that uses the modern commitment format where the key in the
  output of the remote party does not change each state. This makes back
  up and recovery easier as when the channel is closed, the funds go
  directly to that key.
   - ANCHORS: A channel that uses a commitment format that has anchor outputs on the
  commitments, allowing fee bumping after a force close transaction has
  been broadcast.
  */
export enum LnrpcCommitmentType {
  UNKNOWN_COMMITMENT_TYPE = 'UNKNOWN_COMMITMENT_TYPE',
  LEGACY = 'LEGACY',
  STATIC_REMOTE_KEY = 'STATIC_REMOTE_KEY',
  ANCHORS = 'ANCHORS'
}

export interface LnrpcConnectPeerRequest {
  addr?: LnrpcLightningAddress;

  /**
   * If set, the daemon will attempt to persistently connect to the target
   * peer. Otherwise, the call will be synchronous.
   */
  perm?: boolean;

  /**
   * The connection timeout value (in seconds) for this request. It won't affect
   * other requests.
   * @format uint64
   */
  timeout?: string;
}

export type LnrpcConnectPeerResponse = object;

export interface LnrpcDebugLevelRequest {
  show?: boolean;
  level_spec?: string;
}

export interface LnrpcDebugLevelResponse {
  sub_systems?: string;
}

export type LnrpcDeleteAllPaymentsResponse = object;

export interface LnrpcDeleteMacaroonIDResponse {
  /** A boolean indicates that the deletion is successful. */
  deleted?: boolean;
}

export type LnrpcDisconnectPeerResponse = object;

export interface LnrpcEdgeLocator {
  /**
   * The short channel id of this edge.
   * @format uint64
   */
  channel_id?: string;

  /**
   * The direction of this edge. If direction_reverse is false, the direction
   * of this edge is from the channel endpoint with the lexicographically smaller
   * pub key to the endpoint with the larger pub key. If direction_reverse is
   * is true, the edge goes the other way.
   */
  direction_reverse?: boolean;
}

export interface LnrpcEstimateFeeResponse {
  /**
   * The total fee in satoshis.
   * @format int64
   */
  fee_sat?: string;

  /**
   * Deprecated, use sat_per_vbyte.
   * The fee rate in satoshi/vbyte.
   * @format int64
   */
  feerate_sat_per_byte?: string;

  /**
   * The fee rate in satoshi/vbyte.
   * @format uint64
   */
  sat_per_vbyte?: string;
}

export interface LnrpcFailure {
  /**
   *  - RESERVED: The numbers assigned in this enumeration match the failure codes as
   * defined in BOLT #4. Because protobuf 3 requires enums to start with 0,
   * a RESERVED value is added.
   *  - INTERNAL_FAILURE: An internal error occurred.
   *  - UNKNOWN_FAILURE: The error source is known, but the failure itself couldn't be decoded.
   *  - UNREADABLE_FAILURE: An unreadable failure result is returned if the received failure message
   * cannot be decrypted. In that case the error source is unknown.
   */
  code?: FailureFailureCode;

  /** An optional channel update message. */
  channel_update?: LnrpcChannelUpdate;

  /**
   * A failure type-dependent htlc value.
   * @format uint64
   */
  htlc_msat?: string;

  /**
   * The sha256 sum of the onion payload.
   * @format byte
   */
  onion_sha_256?: string;

  /**
   * A failure type-dependent cltv expiry value.
   * @format int64
   */
  cltv_expiry?: number;

  /**
   * A failure type-dependent flags value.
   * @format int64
   */
  flags?: number;

  /**
   * The position in the path of the intermediate or final node that generated
   * the failure message. Position zero is the sender node.
   * @format int64
   */
  failure_source_index?: number;

  /**
   * A failure type-dependent block height.
   * @format int64
   */
  height?: number;
}

export interface LnrpcFeature {
  name?: string;
  is_required?: boolean;
  is_known?: boolean;
}

export enum LnrpcFeatureBit {
  DATALOSS_PROTECT_REQ = 'DATALOSS_PROTECT_REQ',
  DATALOSS_PROTECT_OPT = 'DATALOSS_PROTECT_OPT',
  INITIAL_ROUING_SYNC = 'INITIAL_ROUING_SYNC',
  UPFRONT_SHUTDOWN_SCRIPT_REQ = 'UPFRONT_SHUTDOWN_SCRIPT_REQ',
  UPFRONT_SHUTDOWN_SCRIPT_OPT = 'UPFRONT_SHUTDOWN_SCRIPT_OPT',
  GOSSIP_QUERIES_REQ = 'GOSSIP_QUERIES_REQ',
  GOSSIP_QUERIES_OPT = 'GOSSIP_QUERIES_OPT',
  TLV_ONION_REQ = 'TLV_ONION_REQ',
  TLV_ONION_OPT = 'TLV_ONION_OPT',
  EXT_GOSSIP_QUERIES_REQ = 'EXT_GOSSIP_QUERIES_REQ',
  EXT_GOSSIP_QUERIES_OPT = 'EXT_GOSSIP_QUERIES_OPT',
  STATIC_REMOTE_KEY_REQ = 'STATIC_REMOTE_KEY_REQ',
  STATIC_REMOTE_KEY_OPT = 'STATIC_REMOTE_KEY_OPT',
  PAYMENT_ADDR_REQ = 'PAYMENT_ADDR_REQ',
  PAYMENT_ADDR_OPT = 'PAYMENT_ADDR_OPT',
  MPP_REQ = 'MPP_REQ',
  MPP_OPT = 'MPP_OPT',
  WUMBO_CHANNELS_REQ = 'WUMBO_CHANNELS_REQ',
  WUMBO_CHANNELS_OPT = 'WUMBO_CHANNELS_OPT',
  ANCHORS_REQ = 'ANCHORS_REQ',
  ANCHORS_OPT = 'ANCHORS_OPT',
  ANCHORS_ZERO_FEE_HTLC_REQ = 'ANCHORS_ZERO_FEE_HTLC_REQ',
  ANCHORS_ZERO_FEE_HTLC_OPT = 'ANCHORS_ZERO_FEE_HTLC_OPT',
  AMP_REQ = 'AMP_REQ',
  AMP_OPT = 'AMP_OPT'
}

export interface LnrpcFeeLimit {
  /**
   * The fee limit expressed as a fixed amount of satoshis.
   *
   * The fields fixed and fixed_msat are mutually exclusive.
   * @format int64
   */
  fixed?: string;

  /**
   * The fee limit expressed as a fixed amount of millisatoshis.
   *
   * The fields fixed and fixed_msat are mutually exclusive.
   * @format int64
   */
  fixed_msat?: string;

  /**
   * The fee limit expressed as a percentage of the payment amount.
   * @format int64
   */
  percent?: string;
}

export interface LnrpcFeeReportResponse {
  /**
   * An array of channel fee reports which describes the current fee schedule
   * for each channel.
   */
  channel_fees?: LnrpcChannelFeeReport[];

  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 24 hrs.
   * @format uint64
   */
  day_fee_sum?: string;

  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 week.
   * @format uint64
   */
  week_fee_sum?: string;

  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 month.
   * @format uint64
   */
  month_fee_sum?: string;
}

export interface LnrpcFloatMetric {
  /**
   * Arbitrary float value.
   * @format double
   */
  value?: number;

  /**
   * The value normalized to [0,1] or [-1,1].
   * @format double
   */
  normalized_value?: number;
}

export interface LnrpcForwardingEvent {
  /**
   * Timestamp is the time (unix epoch offset) that this circuit was
   * completed. Deprecated by timestamp_ns.
   * @format uint64
   */
  timestamp?: string;

  /**
   * The incoming channel ID that carried the HTLC that created the circuit.
   * @format uint64
   */
  chan_id_in?: string;

  /**
   * The outgoing channel ID that carried the preimage that completed the
   * circuit.
   * @format uint64
   */
  chan_id_out?: string;

  /**
   * The total amount (in satoshis) of the incoming HTLC that created half
   * the circuit.
   * @format uint64
   */
  amt_in?: string;

  /**
   * The total amount (in satoshis) of the outgoing HTLC that created the
   * second half of the circuit.
   * @format uint64
   */
  amt_out?: string;

  /**
   * The total fee (in satoshis) that this payment circuit carried.
   * @format uint64
   */
  fee?: string;

  /**
   * The total fee (in milli-satoshis) that this payment circuit carried.
   * @format uint64
   */
  fee_msat?: string;

  /**
   * The total amount (in milli-satoshis) of the incoming HTLC that created
   * half the circuit.
   * @format uint64
   */
  amt_in_msat?: string;

  /**
   * The total amount (in milli-satoshis) of the outgoing HTLC that created
   * the second half of the circuit.
   * @format uint64
   */
  amt_out_msat?: string;

  /**
   * The number of nanoseconds elapsed since January 1, 1970 UTC when this
   * circuit was completed.
   * @format uint64
   */
  timestamp_ns?: string;
}

export interface LnrpcForwardingHistoryRequest {
  /**
   * Start time is the starting point of the forwarding history request. All
   * records beyond this point will be included, respecting the end time, and
   * the index offset.
   * @format uint64
   */
  start_time?: string;

  /**
   * End time is the end point of the forwarding history request. The
   * response will carry at most 50k records between the start time and the
   * end time. The index offset can be used to implement pagination.
   * @format uint64
   */
  end_time?: string;

  /**
   * Index offset is the offset in the time series to start at. As each
   * response can only contain 50k records, callers can use this to skip
   * around within a packed time series.
   * @format int64
   */
  index_offset?: number;

  /**
   * The max number of events to return in the response to this query.
   * @format int64
   */
  num_max_events?: number;
}

export interface LnrpcForwardingHistoryResponse {
  /**
   * A list of forwarding events from the time slice of the time series
   * specified in the request.
   */
  forwarding_events?: LnrpcForwardingEvent[];

  /**
   * The index of the last time in the set of returned forwarding events. Can
   * be used to seek further, pagination style.
   * @format int64
   */
  last_offset_index?: number;
}

export interface LnrpcFundingPsbtFinalize {
  /**
   * The funded PSBT that contains all witness data to send the exact channel
   * capacity amount to the PK script returned in the open channel message in a
   * previous step. Cannot be set at the same time as final_raw_tx.
   * @format byte
   */
  signed_psbt?: string;

  /**
   * The pending channel ID of the channel to get the PSBT for.
   * @format byte
   */
  pending_chan_id?: string;

  /**
   * As an alternative to the signed PSBT with all witness data, the final raw
   * wire format transaction can also be specified directly. Cannot be set at the
   * same time as signed_psbt.
   * @format byte
   */
  final_raw_tx?: string;
}

export interface LnrpcFundingPsbtVerify {
  /**
   * The funded but not yet signed PSBT that sends the exact channel capacity
   * amount to the PK script returned in the open channel message in a previous
   * step.
   * @format byte
   */
  funded_psbt?: string;

  /**
   * The pending channel ID of the channel to get the PSBT for.
   * @format byte
   */
  pending_chan_id?: string;
}

export interface LnrpcFundingShim {
  /**
   * A channel shim where the channel point was fully constructed outside
   * of lnd's wallet and the transaction might already be published.
   */
  chan_point_shim?: LnrpcChanPointShim;

  /**
   * A channel shim that uses a PSBT to fund and sign the channel funding
   * transaction.
   */
  psbt_shim?: LnrpcPsbtShim;
}

export interface LnrpcFundingShimCancel {
  /**
   * The pending channel ID of the channel to cancel the funding shim for.
   * @format byte
   */
  pending_chan_id?: string;
}

export type LnrpcFundingStateStepResp = object;

export interface LnrpcFundingTransitionMsg {
  /**
   * The funding shim to register. This should be used before any
   * channel funding has began by the remote party, as it is intended as a
   * preparatory step for the full channel funding.
   */
  shim_register?: LnrpcFundingShim;

  /** Used to cancel an existing registered funding shim. */
  shim_cancel?: LnrpcFundingShimCancel;

  /**
   * Used to continue a funding flow that was initiated to be executed
   * through a PSBT. This step verifies that the PSBT contains the correct
   * outputs to fund the channel.
   */
  psbt_verify?: LnrpcFundingPsbtVerify;

  /**
   * Used to continue a funding flow that was initiated to be executed
   * through a PSBT. This step finalizes the funded and signed PSBT, finishes
   * negotiation with the peer and finally publishes the resulting funding
   * transaction.
   */
  psbt_finalize?: LnrpcFundingPsbtFinalize;
}

export interface LnrpcGetInfoResponse {
  /** The version of the LND software that the node is running. */
  version?: string;

  /** The SHA1 commit hash that the daemon is compiled with. */
  commit_hash?: string;

  /** The identity pubkey of the current node. */
  identity_pubkey?: string;
  alias?: string;
  color?: string;

  /** @format int64 */
  num_pending_channels?: number;

  /** @format int64 */
  num_active_channels?: number;

  /** @format int64 */
  num_inactive_channels?: number;

  /** @format int64 */
  num_peers?: number;

  /** @format int64 */
  block_height?: number;
  block_hash?: string;

  /** @format int64 */
  best_header_timestamp?: string;
  synced_to_chain?: boolean;

  /** Whether we consider ourselves synced with the public channel graph. */
  synced_to_graph?: boolean;
  testnet?: boolean;
  chains?: LnrpcChain[];

  /** The URIs of the current node. */
  uris?: string[];

  /**
   * Features that our node has advertised in our init message, node
   * announcements and invoices.
   */
  features?: Record<string, LnrpcFeature>;
}

export interface LnrpcGetRecoveryInfoResponse {
  recovery_mode?: boolean;
  recovery_finished?: boolean;

  /**
   * The recovery progress, ranging from 0 to 1.
   * @format double
   */
  progress?: number;
}

export interface LnrpcGraphTopologyUpdate {
  node_updates?: LnrpcNodeUpdate[];
  channel_updates?: LnrpcChannelEdgeUpdate[];
  closed_chans?: LnrpcClosedChannelUpdate[];
}

export interface LnrpcHTLC {
  incoming?: boolean;

  /** @format int64 */
  amount?: string;

  /** @format byte */
  hash_lock?: string;

  /** @format int64 */
  expiration_height?: number;

  /**
   * Index identifying the htlc on the channel.
   * @format uint64
   */
  htlc_index?: string;

  /**
   * If this HTLC is involved in a forwarding operation, this field indicates
   * the forwarding channel. For an outgoing htlc, it is the incoming channel.
   * For an incoming htlc, it is the outgoing channel. When the htlc
   * originates from this node or this node is the final destination,
   * forwarding_channel will be zero. The forwarding channel will also be zero
   * for htlcs that need to be forwarded but don't have a forwarding decision
   * persisted yet.
   * @format uint64
   */
  forwarding_channel?: string;

  /**
   * Index identifying the htlc on the forwarding channel.
   * @format uint64
   */
  forwarding_htlc_index?: string;
}

export interface LnrpcHTLCAttempt {
  /**
   * The unique ID that is used for this attempt.
   * @format uint64
   */
  attempt_id?: string;

  /** The status of the HTLC. */
  status?: HTLCAttemptHTLCStatus;

  /** The route taken by this HTLC. */
  route?: LnrpcRoute;

  /**
   * The time in UNIX nanoseconds at which this HTLC was sent.
   * @format int64
   */
  attempt_time_ns?: string;

  /**
   * The time in UNIX nanoseconds at which this HTLC was settled or failed.
   * This value will not be set if the HTLC is still IN_FLIGHT.
   * @format int64
   */
  resolve_time_ns?: string;

  /** Detailed htlc failure info. */
  failure?: LnrpcFailure;

  /**
   * The preimage that was used to settle the HTLC.
   * @format byte
   */
  preimage?: string;
}

export interface LnrpcHop {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   * @format uint64
   */
  chan_id?: string;

  /** @format int64 */
  chan_capacity?: string;

  /** @format int64 */
  amt_to_forward?: string;

  /** @format int64 */
  fee?: string;

  /** @format int64 */
  expiry?: number;

  /** @format int64 */
  amt_to_forward_msat?: string;

  /** @format int64 */
  fee_msat?: string;

  /**
   * An optional public key of the hop. If the public key is given, the payment
   * can be executed without relying on a copy of the channel graph.
   */
  pub_key?: string;

  /**
   * If set to true, then this hop will be encoded using the new variable length
   * TLV format. Note that if any custom tlv_records below are specified, then
   * this field MUST be set to true for them to be encoded properly.
   */
  tlv_payload?: boolean;

  /**
   * An optional TLV record that signals the use of an MPP payment. If present,
   * the receiver will enforce that the same mpp_record is included in the final
   * hop payload of all non-zero payments in the HTLC set. If empty, a regular
   * single-shot payment is or was attempted.
   */
  mpp_record?: LnrpcMPPRecord;

  /**
   * An optional TLV record that signals the use of an AMP payment. If present,
   * the receiver will treat all received payments including the same
   * (payment_addr, set_id) pair  as being part of one logical payment. The
   * payment will be settled by XORing the root_share's together and deriving the
   * child hashes and preimages according to BOLT XX. Must be used in conjunction
   * with mpp_record.
   */
  amp_record?: LnrpcAMPRecord;

  /**
   * An optional set of key-value TLV records. This is useful within the context
   * of the SendToRoute call as it allows callers to specify arbitrary K-V pairs
   * to drop off at each hop within the onion.
   */
  custom_records?: Record<string, string>;
}

export interface LnrpcHopHint {
  /** The public key of the node at the start of the channel. */
  node_id?: string;

  /**
   * The unique identifier of the channel.
   * @format uint64
   */
  chan_id?: string;

  /**
   * The base fee of the channel denominated in millisatoshis.
   * @format int64
   */
  fee_base_msat?: number;

  /**
   * The fee rate of the channel for sending one satoshi across it denominated in
   * millionths of a satoshi.
   * @format int64
   */
  fee_proportional_millionths?: number;

  /**
   * The time-lock delta of the channel.
   * @format int64
   */
  cltv_expiry_delta?: number;
}

export enum LnrpcInitiator {
  INITIATOR_UNKNOWN = 'INITIATOR_UNKNOWN',
  INITIATOR_LOCAL = 'INITIATOR_LOCAL',
  INITIATOR_REMOTE = 'INITIATOR_REMOTE',
  INITIATOR_BOTH = 'INITIATOR_BOTH'
}

export interface LnrpcInvoice {
  /**
   * An optional memo to attach along with the invoice. Used for record keeping
   * purposes for the invoice's creator, and will also be set in the description
   * field of the encoded payment request if the description_hash field is not
   * being used.
   */
  memo?: string;

  /**
   * The hex-encoded preimage (32 byte) which will allow settling an incoming
   * HTLC payable to this preimage. When using REST, this field must be encoded
   * as base64.
   * @format byte
   */
  r_preimage?: string;

  /**
   * The hash of the preimage. When using REST, this field must be encoded as
   * base64.
   * @format byte
   */
  r_hash?: string;

  /**
   * The fields value and value_msat are mutually exclusive.
   * @format int64
   */
  value?: string;

  /**
   * The fields value and value_msat are mutually exclusive.
   * @format int64
   */
  value_msat?: string;
  settled?: boolean;

  /** @format int64 */
  creation_date?: string;

  /** @format int64 */
  settle_date?: string;

  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  payment_request?: string;

  /**
   * Hash (SHA-256) of a description of the payment. Used if the description of
   * payment (memo) is too long to naturally fit within the description field
   * of an encoded payment request. When using REST, this field must be encoded
   * as base64.
   * @format byte
   */
  description_hash?: string;

  /**
   * Payment request expiry time in seconds. Default is 3600 (1 hour).
   * @format int64
   */
  expiry?: string;

  /** Fallback on-chain address. */
  fallback_addr?: string;

  /**
   * Delta to use for the time-lock of the CLTV extended to the final hop.
   * @format uint64
   */
  cltv_expiry?: string;

  /**
   * Route hints that can each be individually used to assist in reaching the
   * invoice's destination.
   */
  route_hints?: LnrpcRouteHint[];

  /** Whether this invoice should include routing hints for private channels. */
  private?: boolean;

  /**
   * The "add" index of this invoice. Each newly created invoice will increment
   * this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all added
   * invoices with an add_index greater than this one.
   * @format uint64
   */
  add_index?: string;

  /**
   * The "settle" index of this invoice. Each newly settled invoice will
   * increment this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all
   * settled invoices with an settle_index greater than this one.
   * @format uint64
   */
  settle_index?: string;

  /**
   * Deprecated, use amt_paid_sat or amt_paid_msat.
   * @format int64
   */
  amt_paid?: string;

  /**
   * The amount that was accepted for this invoice, in satoshis. This will ONLY
   * be set if this invoice has been settled. We provide this field as if the
   * invoice was created with a zero value, then we need to record what amount
   * was ultimately accepted. Additionally, it's possible that the sender paid
   * MORE that was specified in the original invoice. So we'll record that here
   * as well.
   * @format int64
   */
  amt_paid_sat?: string;

  /**
   * The amount that was accepted for this invoice, in millisatoshis. This will
   * ONLY be set if this invoice has been settled. We provide this field as if
   * the invoice was created with a zero value, then we need to record what
   * amount was ultimately accepted. Additionally, it's possible that the sender
   * paid MORE that was specified in the original invoice. So we'll record that
   * here as well.
   * @format int64
   */
  amt_paid_msat?: string;

  /** The state the invoice is in. */
  state?: InvoiceInvoiceState;

  /** List of HTLCs paying to this invoice [EXPERIMENTAL]. */
  htlcs?: LnrpcInvoiceHTLC[];

  /** List of features advertised on the invoice. */
  features?: Record<string, LnrpcFeature>;

  /**
   * Indicates if this invoice was a spontaneous payment that arrived via keysend
   * [EXPERIMENTAL].
   */
  is_keysend?: boolean;

  /**
   * The payment address of this invoice. This value will be used in MPP
   * payments, and also for newer invoies that always require the MPP paylaod
   * for added end-to-end security.
   * @format byte
   */
  payment_addr?: string;

  /** Signals whether or not this is an AMP invoice. */
  is_amp?: boolean;
}

export interface LnrpcInvoiceHTLC {
  /**
   * Short channel id over which the htlc was received.
   * @format uint64
   */
  chan_id?: string;

  /**
   * Index identifying the htlc on the channel.
   * @format uint64
   */
  htlc_index?: string;

  /**
   * The amount of the htlc in msat.
   * @format uint64
   */
  amt_msat?: string;

  /**
   * Block height at which this htlc was accepted.
   * @format int32
   */
  accept_height?: number;

  /**
   * Time at which this htlc was accepted.
   * @format int64
   */
  accept_time?: string;

  /**
   * Time at which this htlc was settled or canceled.
   * @format int64
   */
  resolve_time?: string;

  /**
   * Block height at which this htlc expires.
   * @format int32
   */
  expiry_height?: number;

  /** Current state the htlc is in. */
  state?: LnrpcInvoiceHTLCState;

  /** Custom tlv records. */
  custom_records?: Record<string, string>;

  /**
   * The total amount of the mpp payment in msat.
   * @format uint64
   */
  mpp_total_amt_msat?: string;

  /** Details relevant to AMP HTLCs, only populated if this is an AMP HTLC. */
  amp?: LnrpcAMP;
}

export enum LnrpcInvoiceHTLCState {
  ACCEPTED = 'ACCEPTED',
  SETTLED = 'SETTLED',
  CANCELED = 'CANCELED'
}

export interface LnrpcKeyDescriptor {
  /**
   * The raw bytes of the key being identified.
   * @format byte
   */
  raw_key_bytes?: string;

  /** The key locator that identifies which key to use for signing. */
  key_loc?: LnrpcKeyLocator;
}

export interface LnrpcKeyLocator {
  /**
   * The family of key being identified.
   * @format int32
   */
  key_family?: number;

  /**
   * The precise index of the key being identified.
   * @format int32
   */
  key_index?: number;
}

export interface LnrpcLightningAddress {
  pubkey?: string;
  host?: string;
}

/**
  * An individual vertex/node within the channel graph. A node is
  connected to other nodes by one or more channel edges emanating from it. As the
  graph is directed, a node will also have an incoming edge attached to it for
  each outgoing edge.
  */
export interface LnrpcLightningNode {
  /** @format int64 */
  last_update?: number;
  pub_key?: string;
  alias?: string;
  addresses?: LnrpcNodeAddress[];
  color?: string;
  features?: Record<string, LnrpcFeature>;
}

export interface LnrpcListChannelsResponse {
  channels?: LnrpcChannel[];
}

export interface LnrpcListInvoiceResponse {
  /**
   * A list of invoices from the time slice of the time series specified in the
   * request.
   */
  invoices?: LnrpcInvoice[];

  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek further, pagination style.
   * @format uint64
   */
  last_index_offset?: string;

  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek backwards, pagination style.
   * @format uint64
   */
  first_index_offset?: string;
}

export interface LnrpcListMacaroonIDsResponse {
  /** The list of root key IDs that are in use. */
  root_key_ids?: string[];
}

export interface LnrpcListPaymentsResponse {
  payments?: LnrpcPayment[];

  /**
   * The index of the first item in the set of returned payments. This can be
   * used as the index_offset to continue seeking backwards in the next request.
   * @format uint64
   */
  first_index_offset?: string;

  /**
   * The index of the last item in the set of returned payments. This can be used
   * as the index_offset to continue seeking forwards in the next request.
   * @format uint64
   */
  last_index_offset?: string;
}

export interface LnrpcListPeersResponse {
  peers?: LnrpcPeer[];
}

export interface LnrpcListPermissionsResponse {
  /**
   * A map between all RPC method URIs and their required macaroon permissions to
   * access them.
   */
  method_permissions?: Record<string, LnrpcMacaroonPermissionList>;
}

export interface LnrpcListUnspentResponse {
  utxos?: LnrpcUtxo[];
}

export interface LnrpcMPPRecord {
  /**
   * A unique, random identifier used to authenticate the sender as the intended
   * payer of a multi-path payment. The payment_addr must be the same for all
   * subpayments, and match the payment_addr provided in the receiver's invoice.
   * The same payment_addr must be used on all subpayments.
   * @format byte
   */
  payment_addr?: string;

  /**
   * The total amount in milli-satoshis being sent as part of a larger multi-path
   * payment. The caller is responsible for ensuring subpayments to the same node
   * and payment_hash sum exactly to total_amt_msat. The same
   * total_amt_msat must be used on all subpayments.
   * @format int64
   */
  total_amt_msat?: string;
}

export interface LnrpcMacaroonPermission {
  /** The entity a permission grants access to. */
  entity?: string;

  /** The action that is granted. */
  action?: string;
}

export interface LnrpcMacaroonPermissionList {
  /** A list of macaroon permissions. */
  permissions?: LnrpcMacaroonPermission[];
}

export interface LnrpcMultiChanBackup {
  /** Is the set of all channels that are included in this multi-channel backup. */
  chan_points?: LnrpcChannelPoint[];

  /**
   * A single encrypted blob containing all the static channel backups of the
   * channel listed above. This can be stored as a single file or blob, and
   * safely be replaced with any prior/future versions. When using REST, this
   * field must be encoded as base64.
   * @format byte
   */
  multi_chan_backup?: string;
}

export interface LnrpcNetworkInfo {
  /** @format int64 */
  graph_diameter?: number;

  /** @format double */
  avg_out_degree?: number;

  /** @format int64 */
  max_out_degree?: number;

  /** @format int64 */
  num_nodes?: number;

  /** @format int64 */
  num_channels?: number;

  /** @format int64 */
  total_network_capacity?: string;

  /** @format double */
  avg_channel_size?: number;

  /** @format int64 */
  min_channel_size?: string;

  /** @format int64 */
  max_channel_size?: string;

  /** @format int64 */
  median_channel_size_sat?: string;

  /**
   * The number of edges marked as zombies.
   * @format uint64
   */
  num_zombie_chans?: string;
}

export interface LnrpcNewAddressResponse {
  address?: string;
}

export interface LnrpcNodeAddress {
  network?: string;
  addr?: string;
}

export interface LnrpcNodeInfo {
  /**
   * An individual vertex/node within the channel graph. A node is
   * connected to other nodes by one or more channel edges emanating from it. As
   * the graph is directed, a node will also have an incoming edge attached to
   * it for each outgoing edge.
   */
  node?: LnrpcLightningNode;

  /**
   * The total number of channels for the node.
   * @format int64
   */
  num_channels?: number;

  /**
   * The sum of all channels capacity for the node, denominated in satoshis.
   * @format int64
   */
  total_capacity?: string;

  /** A list of all public channels for the node. */
  channels?: LnrpcChannelEdge[];
}

export enum LnrpcNodeMetricType {
  UNKNOWN = 'UNKNOWN',
  BETWEENNESS_CENTRALITY = 'BETWEENNESS_CENTRALITY'
}

export interface LnrpcNodeMetricsResponse {
  /**
   * Betweenness centrality is the sum of the ratio of shortest paths that pass
   * through the node for each pair of nodes in the graph (not counting paths
   * starting or ending at this node).
   * Map of node pubkey to betweenness centrality of the node. Normalized
   * values are in the [0,1] closed interval.
   */
  betweenness_centrality?: Record<string, LnrpcFloatMetric>;
}

export interface LnrpcNodePair {
  /**
   * The sending node of the pair. When using REST, this field must be encoded as
   * base64.
   * @format byte
   */
  from?: string;

  /**
   * The receiving node of the pair. When using REST, this field must be encoded
   * as base64.
   * @format byte
   */
  to?: string;
}

export interface LnrpcNodeUpdate {
  /** Deprecated, use node_addresses. */
  addresses?: string[];
  identity_key?: string;

  /**
   * Deprecated, use features.
   * @format byte
   */
  global_features?: string;
  alias?: string;
  color?: string;
  node_addresses?: LnrpcNodeAddress[];

  /**
   * Features that the node has advertised in the init message, node
   * announcements and invoices.
   */
  features?: Record<string, LnrpcFeature>;
}

export interface LnrpcOpenChannelRequest {
  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * funding transaction.
   * @format uint64
   */
  sat_per_vbyte?: string;

  /**
   * The pubkey of the node to open a channel with. When using REST, this field
   * must be encoded as base64.
   * @format byte
   */
  node_pubkey?: string;

  /**
   * The hex encoded pubkey of the node to open a channel with. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   */
  node_pubkey_string?: string;

  /** @format int64 */
  local_funding_amount?: string;

  /** @format int64 */
  push_sat?: string;

  /**
   * The target number of blocks that the funding transaction should be
   * confirmed by.
   * @format int32
   */
  target_conf?: number;

  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * funding transaction.
   * @format int64
   */
  sat_per_byte?: string;

  /**
   * Whether this channel should be private, not announced to the greater
   * network.
   */
  private?: boolean;

  /**
   * The minimum value in millisatoshi we will require for incoming HTLCs on
   * the channel.
   * @format int64
   */
  min_htlc_msat?: string;

  /**
   * The delay we require on the remote's commitment transaction. If this is
   * not set, it will be scaled automatically with the channel size.
   * @format int64
   */
  remote_csv_delay?: number;

  /**
   * The minimum number of confirmations each one of your outputs used for
   * the funding transaction must satisfy.
   * @format int32
   */
  min_confs?: number;

  /**
   * Whether unconfirmed outputs should be used as inputs for the funding
   * transaction.
   */
  spend_unconfirmed?: boolean;

  /**
   * Close address is an optional address which specifies the address to which
   * funds should be paid out to upon cooperative close. This field may only be
   * set if the peer supports the option upfront feature bit (call listpeers
   * to check). The remote peer will only accept cooperative closes to this
   * address if it is set.
   *
   * Note: If this value is set on channel creation, you will *not* be able to
   * cooperatively close out to a different address.
   */
  close_address?: string;

  /**
   * Funding shims are an optional argument that allow the caller to intercept
   * certain funding functionality. For example, a shim can be provided to use a
   * particular key for the commitment key (ideally cold) rather than use one
   * that is generated by the wallet as normal, or signal that signing will be
   * carried out in an interactive manner (PSBT based).
   */
  funding_shim?: LnrpcFundingShim;

  /**
   * The maximum amount of coins in millisatoshi that can be pending within
   * the channel. It only applies to the remote party.
   * @format uint64
   */
  remote_max_value_in_flight_msat?: string;

  /**
   * The maximum number of concurrent HTLCs we will allow the remote party to add
   * to the commitment transaction.
   * @format int64
   */
  remote_max_htlcs?: number;

  /**
   * Max local csv is the maximum csv delay we will allow for our own commitment
   * transaction.
   * @format int64
   */
  max_local_csv?: number;

  /**
   * The explicit commitment type to use. Note this field will only be used if
   * the remote peer supports explicit channel negotiation.
   */
  commitment_type?: LnrpcCommitmentType;
}

export interface LnrpcOpenStatusUpdate {
  /**
   * Signals that the channel is now fully negotiated and the funding
   * transaction published.
   */
  chan_pending?: LnrpcPendingUpdate;

  /**
   * Signals that the channel's funding transaction has now reached the
   * required number of confirmations on chain and can be used.
   */
  chan_open?: LnrpcChannelOpenUpdate;

  /**
   * Signals that the funding process has been suspended and the construction
   * of a PSBT that funds the channel PK script is now required.
   */
  psbt_fund?: LnrpcReadyForPsbtFunding;

  /**
   * The pending channel ID of the created channel. This value may be used to
   * further the funding flow manually via the FundingStateStep method.
   * @format byte
   */
  pending_chan_id?: string;
}

export interface LnrpcOutPoint {
  /**
   * Raw bytes representing the transaction id.
   * @format byte
   */
  txid_bytes?: string;

  /** Reversed, hex-encoded string representing the transaction id. */
  txid_str?: string;

  /**
   * The index of the output on the transaction.
   * @format int64
   */
  output_index?: number;
}

export interface LnrpcPayReq {
  destination?: string;
  payment_hash?: string;

  /** @format int64 */
  num_satoshis?: string;

  /** @format int64 */
  timestamp?: string;

  /** @format int64 */
  expiry?: string;
  description?: string;
  description_hash?: string;
  fallback_addr?: string;

  /** @format int64 */
  cltv_expiry?: string;
  route_hints?: LnrpcRouteHint[];

  /** @format byte */
  payment_addr?: string;

  /** @format int64 */
  num_msat?: string;
  features?: Record<string, LnrpcFeature>;
}

export interface LnrpcPayment {
  payment_hash?: string;

  /**
   * Deprecated, use value_sat or value_msat.
   * @format int64
   */
  value?: string;

  /** @format int64 */
  creation_date?: string;

  /**
   * Deprecated, use fee_sat or fee_msat.
   * @format int64
   */
  fee?: string;
  payment_preimage?: string;

  /** @format int64 */
  value_sat?: string;

  /** @format int64 */
  value_msat?: string;

  /** The optional payment request being fulfilled. */
  payment_request?: string;

  /** The status of the payment. */
  status?: PaymentPaymentStatus;

  /** @format int64 */
  fee_sat?: string;

  /** @format int64 */
  fee_msat?: string;

  /**
   * The time in UNIX nanoseconds at which the payment was created.
   * @format int64
   */
  creation_time_ns?: string;

  /** The HTLCs made in attempt to settle the payment. */
  htlcs?: LnrpcHTLCAttempt[];

  /**
   * The creation index of this payment. Each payment can be uniquely identified
   * by this index, which may not strictly increment by 1 for payments made in
   * older versions of lnd.
   * @format uint64
   */
  payment_index?: string;

  /**
   *  - FAILURE_REASON_NONE: Payment isn't failed (yet).
   *  - FAILURE_REASON_TIMEOUT: There are more routes to try, but the payment timeout was exceeded.
   *  - FAILURE_REASON_NO_ROUTE: All possible routes were tried and failed permanently. Or were no
   * routes to the destination at all.
   *  - FAILURE_REASON_ERROR: A non-recoverable error has occured.
   *  - FAILURE_REASON_INCORRECT_PAYMENT_DETAILS: Payment details incorrect (unknown hash, invalid amt or
   * invalid final cltv delta)
   *  - FAILURE_REASON_INSUFFICIENT_BALANCE: Insufficient local balance.
   */
  failure_reason?: LnrpcPaymentFailureReason;
}

/**
  *  - FAILURE_REASON_NONE: Payment isn't failed (yet).
   - FAILURE_REASON_TIMEOUT: There are more routes to try, but the payment timeout was exceeded.
   - FAILURE_REASON_NO_ROUTE: All possible routes were tried and failed permanently. Or were no
  routes to the destination at all.
   - FAILURE_REASON_ERROR: A non-recoverable error has occured.
   - FAILURE_REASON_INCORRECT_PAYMENT_DETAILS: Payment details incorrect (unknown hash, invalid amt or
  invalid final cltv delta)
   - FAILURE_REASON_INSUFFICIENT_BALANCE: Insufficient local balance.
  */
export enum LnrpcPaymentFailureReason {
  FAILURE_REASON_NONE = 'FAILURE_REASON_NONE',
  FAILURE_REASON_TIMEOUT = 'FAILURE_REASON_TIMEOUT',
  FAILURE_REASON_NO_ROUTE = 'FAILURE_REASON_NO_ROUTE',
  FAILURE_REASON_ERROR = 'FAILURE_REASON_ERROR',
  FAILURE_REASON_INCORRECT_PAYMENT_DETAILS = 'FAILURE_REASON_INCORRECT_PAYMENT_DETAILS',
  FAILURE_REASON_INSUFFICIENT_BALANCE = 'FAILURE_REASON_INSUFFICIENT_BALANCE'
}

export interface LnrpcPeer {
  pub_key?: string;
  address?: string;

  /** @format uint64 */
  bytes_sent?: string;

  /** @format uint64 */
  bytes_recv?: string;

  /** @format int64 */
  sat_sent?: string;

  /** @format int64 */
  sat_recv?: string;
  inbound?: boolean;

  /** @format int64 */
  ping_time?: string;

  /** The type of sync we are currently performing with this peer. */
  sync_type?: PeerSyncType;

  /** Features advertised by the remote peer in their init message. */
  features?: Record<string, LnrpcFeature>;

  /**
   * The latest errors received from our peer with timestamps, limited to the 10
   * most recent errors. These errors are tracked across peer connections, but
   * are not persisted across lnd restarts. Note that these errors are only
   * stored for peers that we have channels open with, to prevent peers from
   * spamming us with errors at no cost.
   */
  errors?: LnrpcTimestampedError[];

  /**
   * The number of times we have recorded this peer going offline or coming
   * online, recorded across restarts. Note that this value is decreased over
   * time if the peer has not recently flapped, so that we can forgive peers
   * with historically high flap counts.
   * @format int32
   */
  flap_count?: number;

  /**
   * The timestamp of the last flap we observed for this peer. If this value is
   * zero, we have not observed any flaps for this peer.
   * @format int64
   */
  last_flap_ns?: string;

  /**
   * The last ping payload the peer has sent to us.
   * @format byte
   */
  last_ping_payload?: string;
}

export interface LnrpcPeerEvent {
  /** The identity pubkey of the peer. */
  pub_key?: string;
  type?: PeerEventEventType;
}

export interface LnrpcPendingChannelsResponse {
  /** @format int64 */
  total_limbo_balance?: string;
  pending_open_channels?: PendingChannelsResponsePendingOpenChannel[];

  /**
   * Deprecated: Channels pending closing previously contained cooperatively
   * closed channels with a single confirmation. These channels are now
   * considered closed from the time we see them on chain.
   */
  pending_closing_channels?: PendingChannelsResponseClosedChannel[];
  pending_force_closing_channels?: PendingChannelsResponseForceClosedChannel[];
  waiting_close_channels?: PendingChannelsResponseWaitingCloseChannel[];
}

export interface LnrpcPendingHTLC {
  incoming?: boolean;

  /** @format int64 */
  amount?: string;
  outpoint?: string;

  /** @format int64 */
  maturity_height?: number;

  /**
   * The number of blocks remaining until the current stage can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   * @format int32
   */
  blocks_til_maturity?: number;

  /** @format int64 */
  stage?: number;
}

export interface LnrpcPendingUpdate {
  /** @format byte */
  txid?: string;

  /** @format int64 */
  output_index?: number;
}

export interface LnrpcPolicyUpdateRequest {
  /** If set, then this update applies to all currently active channels. */
  global?: boolean;

  /** If set, this update will target a specific channel. */
  chan_point?: LnrpcChannelPoint;

  /**
   * The base fee charged regardless of the number of milli-satoshis sent.
   * @format int64
   */
  base_fee_msat?: string;

  /**
   * The effective fee rate in milli-satoshis. The precision of this value
   * goes up to 6 decimal places, so 1e-6.
   * @format double
   */
  fee_rate?: number;

  /**
   * The required timelock delta for HTLCs forwarded over the channel.
   * @format int64
   */
  time_lock_delta?: number;

  /**
   * If set, the maximum HTLC size in milli-satoshis. If unset, the maximum
   * HTLC will be unchanged.
   * @format uint64
   */
  max_htlc_msat?: string;

  /**
   * The minimum HTLC size in milli-satoshis. Only applied if
   * min_htlc_msat_specified is true.
   * @format uint64
   */
  min_htlc_msat?: string;

  /** If true, min_htlc_msat is applied. */
  min_htlc_msat_specified?: boolean;
}

export type LnrpcPolicyUpdateResponse = object;

export interface LnrpcPsbtShim {
  /**
   * A unique identifier of 32 random bytes that will be used as the pending
   * channel ID to identify the PSBT state machine when interacting with it and
   * on the wire protocol to initiate the funding request.
   * @format byte
   */
  pending_chan_id?: string;

  /**
   * An optional base PSBT the new channel output will be added to. If this is
   * non-empty, it must be a binary serialized PSBT.
   * @format byte
   */
  base_psbt?: string;

  /**
   * If a channel should be part of a batch (multiple channel openings in one
   * transaction), it can be dangerous if the whole batch transaction is
   * published too early before all channel opening negotiations are completed.
   * This flag prevents this particular channel from broadcasting the transaction
   * after the negotiation with the remote peer. In a batch of channel openings
   * this flag should be set to true for every channel but the very last.
   */
  no_publish?: boolean;
}

export interface LnrpcQueryRoutesResponse {
  /**
   * The route that results from the path finding operation. This is still a
   * repeated field to retain backwards compatibility.
   */
  routes?: LnrpcRoute[];

  /** @format double */
  success_prob?: number;
}

export interface LnrpcReadyForPsbtFunding {
  /**
   * The P2WSH address of the channel funding multisig address that the below
   * specified amount in satoshis needs to be sent to.
   */
  funding_address?: string;

  /**
   * The exact amount in satoshis that needs to be sent to the above address to
   * fund the pending channel.
   * @format int64
   */
  funding_amount?: string;

  /**
   * A raw PSBT that contains the pending channel output. If a base PSBT was
   * provided in the PsbtShim, this is the base PSBT with one additional output.
   * If no base PSBT was specified, this is an otherwise empty PSBT with exactly
   * one output.
   * @format byte
   */
  psbt?: string;
}

export interface LnrpcResolution {
  /** The type of output we are resolving. */
  resolution_type?: LnrpcResolutionType;

  /** The outcome of our on chain action that resolved the outpoint. */
  outcome?: LnrpcResolutionOutcome;

  /** The outpoint that was spent by the resolution. */
  outpoint?: LnrpcOutPoint;

  /**
   * The amount that was claimed by the resolution.
   * @format uint64
   */
  amount_sat?: string;

  /**
   * The hex-encoded transaction ID of the sweep transaction that spent the
   * output.
   */
  sweep_txid?: string;
}

/**
  *  - OUTCOME_UNKNOWN: Outcome unknown.
   - CLAIMED: An output was claimed on chain.
   - UNCLAIMED: An output was left unclaimed on chain.
   - ABANDONED: ResolverOutcomeAbandoned indicates that an output that we did not
  claim on chain, for example an anchor that we did not sweep and a
  third party claimed on chain, or a htlc that we could not decode
  so left unclaimed.
   - FIRST_STAGE: If we force closed our channel, our htlcs need to be claimed in two
  stages. This outcome represents the broadcast of a timeout or success
  transaction for this two stage htlc claim.
   - TIMEOUT: A htlc was timed out on chain.
  */
export enum LnrpcResolutionOutcome {
  OUTCOME_UNKNOWN = 'OUTCOME_UNKNOWN',
  CLAIMED = 'CLAIMED',
  UNCLAIMED = 'UNCLAIMED',
  ABANDONED = 'ABANDONED',
  FIRST_STAGE = 'FIRST_STAGE',
  TIMEOUT = 'TIMEOUT'
}

/**
  *  - ANCHOR: We resolved an anchor output.
   - INCOMING_HTLC: We are resolving an incoming htlc on chain. This if this htlc is
  claimed, we swept the incoming htlc with the preimage. If it is timed
  out, our peer swept the timeout path.
   - OUTGOING_HTLC: We are resolving an outgoing htlc on chain. If this htlc is claimed,
  the remote party swept the htlc with the preimage. If it is timed out,
  we swept it with the timeout path.
   - COMMIT: We force closed and need to sweep our time locked commitment output.
  */
export enum LnrpcResolutionType {
  TYPE_UNKNOWN = 'TYPE_UNKNOWN',
  ANCHOR = 'ANCHOR',
  INCOMING_HTLC = 'INCOMING_HTLC',
  OUTGOING_HTLC = 'OUTGOING_HTLC',
  COMMIT = 'COMMIT'
}

export type LnrpcRestoreBackupResponse = object;

export interface LnrpcRestoreChanBackupRequest {
  /** The channels to restore as a list of channel/backup pairs. */
  chan_backups?: LnrpcChannelBackups;

  /**
   * The channels to restore in the packed multi backup format. When using
   * REST, this field must be encoded as base64.
   * @format byte
   */
  multi_chan_backup?: string;
}

/**
  * A path through the channel graph which runs over one or more channels in
  succession. This struct carries all the information required to craft the
  Sphinx onion packet, and send the payment along the first hop in the path. A
  route is only selected as valid if all the channels have sufficient capacity to
  carry the initial payment amount after fees are accounted for.
  */
export interface LnrpcRoute {
  /**
   * The cumulative (final) time lock across the entire route. This is the CLTV
   * value that should be extended to the first hop in the route. All other hops
   * will decrement the time-lock as advertised, leaving enough time for all
   * hops to wait for or present the payment preimage to complete the payment.
   * @format int64
   */
  total_time_lock?: number;

  /**
   * The sum of the fees paid at each hop within the final route. In the case
   * of a one-hop payment, this value will be zero as we don't need to pay a fee
   * to ourselves.
   * @format int64
   */
  total_fees?: string;

  /**
   * The total amount of funds required to complete a payment over this route.
   * This value includes the cumulative fees at each hop. As a result, the HTLC
   * extended to the first-hop in the route will need to have at least this many
   * satoshis, otherwise the route will fail at an intermediate node due to an
   * insufficient amount of fees.
   * @format int64
   */
  total_amt?: string;

  /** Contains details concerning the specific forwarding details at each hop. */
  hops?: LnrpcHop[];

  /**
   * The total fees in millisatoshis.
   * @format int64
   */
  total_fees_msat?: string;

  /**
   * The total amount in millisatoshis.
   * @format int64
   */
  total_amt_msat?: string;
}

export interface LnrpcRouteHint {
  /**
   * A list of hop hints that when chained together can assist in reaching a
   * specific destination.
   */
  hop_hints?: LnrpcHopHint[];
}

export interface LnrpcRoutingPolicy {
  /** @format int64 */
  time_lock_delta?: number;

  /** @format int64 */
  min_htlc?: string;

  /** @format int64 */
  fee_base_msat?: string;

  /** @format int64 */
  fee_rate_milli_msat?: string;
  disabled?: boolean;

  /** @format uint64 */
  max_htlc_msat?: string;

  /** @format int64 */
  last_update?: number;
}

export interface LnrpcSendCoinsRequest {
  addr?: string;

  /** @format int64 */
  amount?: string;

  /**
   * The target number of blocks that this transaction should be confirmed
   * by.
   * @format int32
   */
  target_conf?: number;

  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   * @format uint64
   */
  sat_per_vbyte?: string;

  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   * @format int64
   */
  sat_per_byte?: string;

  /**
   * If set, then the amount field will be ignored, and lnd will attempt to
   * send all the coins under control of the internal wallet to the specified
   * address.
   */
  send_all?: boolean;

  /** An optional label for the transaction, limited to 500 characters. */
  label?: string;

  /**
   * The minimum number of confirmations each one of your outputs used for
   * the transaction must satisfy.
   * @format int32
   */
  min_confs?: number;

  /** Whether unconfirmed outputs should be used as inputs for the transaction. */
  spend_unconfirmed?: boolean;
}

export interface LnrpcSendCoinsResponse {
  txid?: string;
}

export interface LnrpcSendManyRequest {
  AddrToAmount?: Record<string, string>;

  /**
   * The target number of blocks that this transaction should be confirmed
   * by.
   * @format int32
   */
  target_conf?: number;

  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   * @format uint64
   */
  sat_per_vbyte?: string;

  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   * @format int64
   */
  sat_per_byte?: string;

  /** An optional label for the transaction, limited to 500 characters. */
  label?: string;

  /**
   * The minimum number of confirmations each one of your outputs used for
   * the transaction must satisfy.
   * @format int32
   */
  min_confs?: number;

  /** Whether unconfirmed outputs should be used as inputs for the transaction. */
  spend_unconfirmed?: boolean;
}

export interface LnrpcSendManyResponse {
  txid?: string;
}

export interface LnrpcSendRequest {
  /**
   * The identity pubkey of the payment recipient. When using REST, this field
   * must be encoded as base64.
   * @format byte
   */
  dest?: string;

  /**
   * The hex-encoded identity pubkey of the payment recipient. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   */
  dest_string?: string;

  /**
   * The amount to send expressed in satoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   * @format int64
   */
  amt?: string;

  /**
   * The amount to send expressed in millisatoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   * @format int64
   */
  amt_msat?: string;

  /**
   * The hash to use within the payment's HTLC. When using REST, this field
   * must be encoded as base64.
   * @format byte
   */
  payment_hash?: string;

  /**
   * The hex-encoded hash to use within the payment's HTLC. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   */
  payment_hash_string?: string;

  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  payment_request?: string;

  /**
   * The CLTV delta from the current height that should be used to set the
   * timelock for the final hop.
   * @format int32
   */
  final_cltv_delta?: number;

  /**
   * The maximum number of satoshis that will be paid as a fee of the payment.
   * This value can be represented either as a percentage of the amount being
   * sent, or as a fixed amount of the maximum fee the user is willing the pay to
   * send the payment.
   */
  fee_limit?: LnrpcFeeLimit;

  /**
   * The channel id of the channel that must be taken to the first hop. If zero,
   * any channel may be used.
   * @format uint64
   */
  outgoing_chan_id?: string;

  /**
   * The pubkey of the last hop of the route. If empty, any hop may be used.
   * @format byte
   */
  last_hop_pubkey?: string;

  /**
   * An optional maximum total time lock for the route. This should not exceed
   * lnd's `--max-cltv-expiry` setting. If zero, then the value of
   * `--max-cltv-expiry` is enforced.
   * @format int64
   */
  cltv_limit?: number;

  /**
   * An optional field that can be used to pass an arbitrary set of TLV records
   * to a peer which understands the new records. This can be used to pass
   * application specific data during the payment attempt. Record types are
   * required to be in the custom range >= 65536. When using REST, the values
   * must be encoded as base64.
   */
  dest_custom_records?: Record<string, string>;

  /** If set, circular payments to self are permitted. */
  allow_self_payment?: boolean;

  /**
   * Features assumed to be supported by the final node. All transitive feature
   * dependencies must also be set properly. For a given feature bit pair, either
   * optional or remote may be set, but not both. If this field is nil or empty,
   * the router will try to load destination features from the graph as a
   * fallback.
   */
  dest_features?: LnrpcFeatureBit[];

  /**
   * The payment address of the generated invoice.
   * @format byte
   */
  payment_addr?: string;
}

export interface LnrpcSendResponse {
  payment_error?: string;

  /** @format byte */
  payment_preimage?: string;

  /**
   * A path through the channel graph which runs over one or more channels in
   * succession. This struct carries all the information required to craft the
   * Sphinx onion packet, and send the payment along the first hop in the path. A
   * route is only selected as valid if all the channels have sufficient capacity to
   * carry the initial payment amount after fees are accounted for.
   */
  payment_route?: LnrpcRoute;

  /** @format byte */
  payment_hash?: string;
}

export interface LnrpcSendToRouteRequest {
  /**
   * The payment hash to use for the HTLC. When using REST, this field must be
   * encoded as base64.
   * @format byte
   */
  payment_hash?: string;

  /**
   * An optional hex-encoded payment hash to be used for the HTLC. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   */
  payment_hash_string?: string;

  /** Route that should be used to attempt to complete the payment. */
  route?: LnrpcRoute;
}

export interface LnrpcSignMessageRequest {
  /**
   * The message to be signed. When using REST, this field must be encoded as
   * base64.
   * @format byte
   */
  msg?: string;
}

export interface LnrpcSignMessageResponse {
  signature?: string;
}

export type LnrpcStopRequest = object;

export type LnrpcStopResponse = object;

export interface LnrpcTimestampedError {
  /**
   * The unix timestamp in seconds when the error occurred.
   * @format uint64
   */
  timestamp?: string;

  /** The string representation of the error sent by our peer. */
  error?: string;
}

export interface LnrpcTransaction {
  tx_hash?: string;

  /** @format int64 */
  amount?: string;

  /** @format int32 */
  num_confirmations?: number;
  block_hash?: string;

  /** @format int32 */
  block_height?: number;

  /** @format int64 */
  time_stamp?: string;

  /** @format int64 */
  total_fees?: string;
  dest_addresses?: string[];

  /** The raw transaction hex. */
  raw_tx_hex?: string;

  /** A label that was optionally set on transaction broadcast. */
  label?: string;
}

export interface LnrpcTransactionDetails {
  /** The list of transactions relevant to the wallet. */
  transactions?: LnrpcTransaction[];
}

export interface LnrpcUtxo {
  /**
   * - `p2wkh`: Pay to witness key hash (`WITNESS_PUBKEY_HASH` = 0)
   * - `np2wkh`: Pay to nested witness key hash (`NESTED_PUBKEY_HASH` = 1)
   */
  address_type?: LnrpcAddressType;
  address?: string;

  /** @format int64 */
  amount_sat?: string;
  pk_script?: string;
  outpoint?: LnrpcOutPoint;

  /** @format int64 */
  confirmations?: string;
}

export type LnrpcVerifyChanBackupResponse = object;

export interface LnrpcVerifyMessageRequest {
  /**
   * The message over which the signature is to be verified. When using REST,
   * this field must be encoded as base64.
   * @format byte
   */
  msg?: string;
  signature?: string;
}

export interface LnrpcVerifyMessageResponse {
  valid?: boolean;
  pubkey?: string;
}

export interface LnrpcWalletAccountBalance {
  /**
   * The confirmed balance of the account (with >= 1 confirmations).
   * @format int64
   */
  confirmed_balance?: string;

  /**
   * The unconfirmed balance of the account (with 0 confirmations).
   * @format int64
   */
  unconfirmed_balance?: string;
}

export interface LnrpcWalletBalanceResponse {
  /** @format int64 */
  total_balance?: string;

  /** @format int64 */
  confirmed_balance?: string;

  /** @format int64 */
  unconfirmed_balance?: string;

  /** A mapping of each wallet account's name to its balance. */
  account_balance?: Record<string, LnrpcWalletAccountBalance>;
}
