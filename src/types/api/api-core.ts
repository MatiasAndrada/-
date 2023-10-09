export type Core = {
    block:         number | null;
    reuse_count:   number;
    rtls_attempts: number;
    rtls_landings: number;
    asds_attempts: number;
    asds_landings: number;
    last_update:   null | string;
    launches:      string[];
    serial:        string;
    status:        Status;
    id:            string;
}

export enum Status {
    Active = "active",
    Expended = "expended",
    Inactive = "inactive",
    Lost = "lost",
}
