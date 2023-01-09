import { AuthHandler } from "@serverless-stack/node/auth";
import { Issuer } from "openid-client";




export const handler = AuthHandler({
  providers: {OidcAdapter({
    issuer: await Issuer.discover("<oidc root url>");
    clientID: "<client-id>",
    scope: "<space separated list of scopes>",
    onSuccess: (tokenset) => {}
  })},
});