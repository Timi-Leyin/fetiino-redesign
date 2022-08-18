import Storage, { StorageData } from "../Utils/storage"

const save = (location:string, data:StorageData)=>{
Storage(location).save(data);
}

export default save