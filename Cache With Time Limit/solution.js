var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
const currentTime = Date.now();
const expirationTime = currentTime + duration;
if (this.cache.has(key)) {
const [existingValue, existingExpiration] = this.cache.get(key);
if (existingExpiration > currentTime) {
this.cache.set(key, [value, expirationTime]);
return true;
} else {
this.cache.delete(key);
}
}
this.cache.set(key, [value, expirationTime]);
return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
const currentTime = Date.now();
if (this.cache.has(key)) {
const [value, expirationTime] = this.cache.get(key);
if (expirationTime > currentTime) {
return value;
} else {
this.cache.delete(key);
}
}
return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
const currentTime = Date.now();
let count = 0;
for (const [key, [value, expirationTime]] of this.cache.entries()) {
if (expirationTime > currentTime) {
count++;
} else {
this.cache.delete(key);
}
}
return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */