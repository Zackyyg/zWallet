import axios from "axios";

export interface Key {
  id: number;
  type: String
  amount?: number
  name: String;
  value: String;
};

export function getKeys() {
    return axios.get<Key[]>("http://localhost:4000/get_keys")
}

export function getKey(id: number) {
    return axios.get<Key>("http://localhost:4000/get_key_data/" + id)
}

export function createKey(name: String, address: String) {
    return axios.post<Key>("http://localhost:4000/create_key", {
        "key": {
            "name": name,
            "type": 'eth',
            "value": address
        }
    })
}

export function createKeyNew(name: String) {
    return axios.post<Key>("http://localhost:4000/create_new_key", {
        "key": {
            "name": name,
            "type": 'eth',
            "value": 's'
        }
    })
}

export function updateKey(id: number) {
    return axios.get<Key>("http://localhost:4000/update_key/" + id)
}

export function deleteKey(id: number) {
    return axios.delete<String>("http://localhost:4000/delete_key/" + id)
}
