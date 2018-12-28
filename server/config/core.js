
  const env= process.env.NODE_ENV || 'development';
  const port= process.env.PORT || 3000;
  const baseUrl=`http://localhost:${port}/`;
  const mongoDBUrl= 'mongodb://localhost:27017/emarket';
  const apiVersion="api/v2.2/";
  const tokenLife=3600;
 

  export {
    env,
    port,
    baseUrl,
    mongoDBUrl,
    tokenLife
  }