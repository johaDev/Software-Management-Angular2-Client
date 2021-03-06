// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
export const securityConfig = {
  CLIENT_ID: 'test',
  GRANT_TYPE: 'test',
  SCOPE: 'test'
}
// export const environment = {
//   production: false,
//   contactsUrl: 'api/contacts',
//   companiesUrl: 'api/companies',
//   linksUrl: 'api/links',
//   filesUrl: 'api/files',
//   projectsUrl: 'api/projects',
//   productsUrl: 'api/products',
//   designsUrl: 'api/designs',
//   employmentsUrl: 'api/employments',
//   projectroleassignmentsUrl: 'api/projectroleassignments',
//   commandsUrl: 'api/commands/batch', // change to eventsource if you want to try posting to the eventsource backend
//   commandsReadOnlyUrl: 'api/commands',
//   fileUploadUrl: 'api/fileupload',
//   staticFilesUrl: 'uploads',
//   accountsUrl: 'api/account',
//   productinstallationsUrl: 'api/productinstallations',
//   config: securityConfig
// };
export const environment = {
  production: false,
  contactsUrl: 'http://localhost:50274/api/contacts',
  companiesUrl: 'http://localhost:50274/api/companies',
  linksUrl: 'http://localhost:50274/api/links',
  filesUrl: 'http://localhost:50274/api/files',
  projectsUrl: 'http://localhost:50274/api/projects',
  productsUrl: 'http://localhost:50274/api/products',
  designsUrl: 'http://localhost:50274/api/designs',
  employmentsUrl: 'http://localhost:50274/api/employments',
  projectroleassignmentsUrl: 'http://localhost:50274/api/projectroleassignments',
  commandsUrl: 'http://localhost:50274/api/commands/batch', // change to eventsource if you want to try posting to the eventsource backend
  commandsReadOnlyUrl: 'http://localhost:50274/api/commands',
  commandsExecuteNewUrl: 'api/commands/executenew',
  fileUploadUrl: 'http://localhost:50274/api/fileupload',
  staticFilesUrl: 'http://localhost:50274/uploads',
  accountsUrl: 'http://localhost:53699/api/account',
  productinstallationsUrl: 'http://localhost:50274/api/productinstallations',
  config: securityConfig
};
