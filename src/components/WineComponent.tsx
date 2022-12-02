/* eslint-disable react/jsx-key */
import React from 'react';
import useSWR from 'swr';
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export interface Objekt {
  naziv: any;
  cijenaKn: any;
  cijenaE: any;
  opis: any;
}


export default function WineComponent() {  const { data, error } = useSWR('/api/staticdata', fetcher);

//Handle the error state
if (error) return <div>Failed to load</div>;
//Handle the loading state
if (!data) return <div></div>;

const drinks: any = JSON.parse(data);
//const [drinks,setDrinks] = React.useState<any>(JSON.parse(data));
// let jsonAll : any= {[naziv : "kola",]}
// console.log(drinks);
return (
  <>
    <div className='flex flex-col'>
      {drinks != undefined &&
        Array(drinks.wine).map((el: any) => {
          return el.map((element: any) => {
            return (
              <div className='m-3 flex flex-col text-left justify-start'>
               <div className='flex flex-row'> <div className='mr-3'>{element.naziv}</div> <div>{element.cijenaE}</div> </div>
                <div>{element.opis}</div>
              </div>
            );
          });
        })}
    </div>
  </>
);
}
