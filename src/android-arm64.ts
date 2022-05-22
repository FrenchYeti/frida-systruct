/*
struct nfsctl_arg {
 int                       ca_version;     safeguard
 union {
  struct nfsctl_svc     u_svc;
  struct nfsctl_client  u_client;
  struct nfsctl_export  u_export;
  struct nfsctl_uidmap  u_umap;
  struct nfsctl_fhparm  u_getfh;
  unsigned int          u_debug;
 } u;
}

union nfsctl_res {
 struct knfs_fh          cr_getfh;
 unsigned int            cr_debug;
};*/

import {T,L} from "./types.const";

export default  {
 pollfd: [
  { t:T.INT32, n:"fd", l:L.FD },
  { t:T.SHORT, n:"events" },
  { t:T.SHORT, n:"revents" }
 ]
}