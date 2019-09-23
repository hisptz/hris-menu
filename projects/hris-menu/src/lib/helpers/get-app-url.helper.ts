export function getAppUrl(app: any): string {
  if (!app) {
    return undefined;
  }
  return `/api/apps/${app.name}/${app.launchpath}`;
}
