const SyncStatusEnum = Object.freeze({
    "TARGET_MISSING" : "TARGET_MISSING",
    "TARGET_UPDATED" : "TARGET_UPDATED",
    "CONFLICTING" : "CONFLICTING",
    "IGNORED" : "IGNORED",
    "UP_TO_DATE" : "UP_TO_DATE",
    "SOURCE_UPDATED" : "SOURCE_UPDATED",

    "TARGET_ATTACHMENT_MISSING" : "TARGET_ATTACHMENT_MISSING",
    "TARGET_ATTACHMENT_UPDATED" : "TARGET_ATTACHMENT_UPDATED",
    "ATTACHMENT_CONFLICTING" : "ATTACHMENT_CONFLICTING",
    "SOURCE_ATTACHMENT_UPDATED" : "SOURCE_ATTACHMENT_UPDATED",
    "ATTACHMENT_UP_TO_DATE" : "ATTACHMENT_UP_TO_DATE",

    "WRONG_PAGE_ORDER": "WRONG_PAGE_ORDER", // TODO not implemented yet
    "UNSYNCED_LABELS": "WRONG_PAGE_ORDER" // TODO not implemented yet
});
export default SyncStatusEnum;