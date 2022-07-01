import nodeCache from "node-cache";
let cacheData;

//need to do this instead of redis, because my alpine linux wsl is died

export default () => {
  if (cacheData) {
    return cacheData;
  } else {
    cacheData = new nodeCache();
    return cacheData;
  }
};
