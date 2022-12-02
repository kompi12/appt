/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable simple-import-sort/imports */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import {
  DialogProps,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export interface Objekt {
  naziv: any;
  cijenaKn: any;
  cijenaE: any;
  opis: any;
}

export default function MiddleComponent() {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div></div>;

  const drinks: any = JSON.parse(data);

  const [naziv,setNaziv] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  const [jsoninfo,setjsoninfo] = React.useState(drinks.food);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  function handleClick(
    item:
      | {
          img: string;
          title: string;
          author: string;
          rows: number;
          cols: number;
          featured: boolean;
        }
      | {
          img: string;
          title: string;
          author: string;
          rows?: undefined;
          cols?: undefined;
          featured?: undefined;
        }
      | {
          img: string;
          title: string;
          author: string;
          cols: number;
          rows?: undefined;
          featured?: undefined;
        }
      | {
          img: string;
          title: string;
          author: string;
          rows: number;
          cols: number;
          featured?: undefined;
        }
  ) {
    setNaziv(item.title)
    console.log('As');
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
  ];
  return (
    <>
      <ImageList>
        <ImageListItem key='Subheader' cols={2}>
          <ListSubheader component='div'></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
              onClick={() => {
                handleClick(item);
              }}
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby='scroll-dialog-title'
          aria-describedby='scroll-dialog-description'
        >
          <DialogTitle id='scroll-dialog-title'>{naziv}</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id='scroll-dialog-description'
              ref={descriptionElementRef}
              tabIndex={-1}
            ></DialogContentText>
            {drinks != undefined &&
        Array(drinks.food).map((el: any) => {
          return el.map((element: any) => {
            return (<>
                
              <div className='m-3 flex flex-col text-left justify-start'>
               <div className='flex flex-row'> <div className='mr-3'>{element.naziv}</div> <div>{element.cijenaE}</div> </div>
                <div>{element.opis}</div>
              </div></>
            );
          });
        })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      )}

      {/* <div className=' align-center flex-1 overflow-y-auto p-5'>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <ButtonGroup
              variant='text'
              color='warning'
              aria-label='text  medium secondary button group'
            >
              <Button
                onClick={() => {
                  if (drink) {
                    setDrink(false);
                    setFood(false);
                    setWine(false);
                  } else {
                    setDrink(true);
                    setFood(false);
                    setWine(false);
                  }
                }}
              >
                PI
              </Button>
              <Button
                onClick={() => {
                  if (food) {
                    setDrink(false);
                    setFood(false);
                    setWine(false);
                  } else {
                    setDrink(false);
                    setFood(true);
                    setWine(false);
                  }
                }}
              >
                H
              </Button>
              <Button
                onClick={() => {
                  if (wine) {
                    setDrink(false);
                    setFood(false);
                    setWine(false);
                  } else {
                    setDrink(false);
                    setFood(false);
                    setWine(true);
                  }
                }}
              >
                NA
              </Button>
            </ButtonGroup>
          </div>
          <div className='mt-10 flex justify-center'>
            {drink && <DrinksComponent></DrinksComponent>}
            {food && <FoodComponent></FoodComponent>}
            {wine && <WineComponent></WineComponent>}
          </div>
        </div>
      </div> */}
    </>
  );
}
