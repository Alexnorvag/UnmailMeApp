import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  async function getStorageValue() {
    let value = defaultValue;
    try {
      value = JSON.parse(await AsyncStorage.getItem(key)) || defaultValue;
    } catch (e) {
    } finally {
      updateStorageValue(value);
    }
  }

  async function updateStorage(newValue) {
    try {
      if (newValue === null) {
        await AsyncStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
    } finally {
      updateStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, []);

  return [storageValue, updateStorage];
};

export async function saveValue(key, value) {
  try {
    if (value == null) {
      await removeValue(key);
      return {success: true};
    } else {
      await AsyncStorage.setItem(key, value);
      return {success: true};
    }
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

export async function saveMultiValues(data) {
  const mappedValues = values.map((v, i) => {
    return [i, v];
  });
  try {
    await AsyncStorage.multiSet(mappedValues);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

export async function getValue(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }
}

export async function getMultiValues(keys) {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }

  let value;
  values.forEach((v, i) => {
    value[v[0]] = v[1];
  });

  return value;
}

export async function removeValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

export async function removeMultiValues(keys) {
  try {
    await AsyncStorage.multiRemove(keys);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

export async function getAllKeys() {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
  return keys;
}

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
}

export default useStorage;

// export let setLocalStorage = (key, value) => {
//   if (value && typeof value === 'string') {
//     localStorage.setItem(key, value);
//   } else {
//     localStorage.setItem(key, JSON.stringify(value)); // convert arrays or objects into strings
//   }
// };

// export let getLocalStorage = (key) => {
//   const data = localStorage.getItem(key);
//   try {
//     return JSON.parse(data); // converts a JSON string into a Javascript Object
//   } catch (e) {
//     return data;
//   }
// };

// export let clearLocalStorage = (key) => localStorage.removeItem(key);
