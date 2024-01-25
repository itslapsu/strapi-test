module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_PEMP66rSPVPMjzveApdIQ1DTcaK3/X9yTMlawDo",
      apiToken: "HjBS49Y1csiSUT3ih2eNfpEv",
      appFilter: "strapi-test",
      teamFilter: "itslapsu",
      roles: ["strapi-super-admin"],
    },
  },
});
