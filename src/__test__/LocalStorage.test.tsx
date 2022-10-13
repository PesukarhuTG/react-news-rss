import '@testing-library/jest-dom/extend-expect';

interface Store {
  [key: string]: string;
}

class localStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  getAll() {
    return this.store;
  }
}

describe('LocalStorage', () => {
  const lStorageMock = new localStorageMock();
  Object.defineProperty(window, 'localStorage', { value: lStorageMock });

  const setLocalStorage = (id: string, data: object) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };

  test('data is added into local storage', () => {
    const mockId = '1';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});

describe('Set local storage item', () => {
  const setLocalStorage = (id: string, data: object) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };

  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into local storage', () => {
    const mockId = '111';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test('data in local storage which is overwritten', () => {
    const mockId = '222';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });

  test('only one ID is in localStorage', () => {
    const mockId = '333';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    setLocalStorage(mockId, mockNewData);

    const allItems = window.localStorage.getAll();

    expect(Object.keys(allItems).length).toBe(1);
  });
});
