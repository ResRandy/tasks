/*export interface dhValues({dhValue,setDhValue}:{
    [dhValue, setDhValue] = useState<number>(0);
})*/

export interface numDhValue {
    setDhValue: (newDhValue: number) => void;
    value: number;
}
