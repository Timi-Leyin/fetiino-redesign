
export interface StorageData{
    type:'gradient' | 'color';
    data: string[]
}

const Storage = (loc:string)=>{
    return {
        save:(data:StorageData)=>{
            const old_data = localStorage.getItem(loc)  || JSON.stringify([]);
            const new_data = JSON.parse(old_data)
            new_data.push(data)
            console.log(new_data)
            return localStorage.setItem(loc,JSON.stringify(new_data))
        },

        get:()=>{
          const _get = localStorage.getItem(loc) || JSON.stringify([])
          return JSON.parse(_get)
        }
    }
}


export default Storage