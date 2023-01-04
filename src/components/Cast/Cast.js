// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import * as API from '../../services/moviesApi';
// import defaultCastAvatar from '../../images/defaultCastAvatar.png';
// import { Box } from 'components/Box/Box';
// import { Image, Text } from './Cast.styled';

// import BeatLoader from 'react-spinners/BeatLoader';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [casts, setCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const posterPath = 'https://image.tmdb.org/t/p/w500';

//   // async function getResult(movieId) {}

//   // async function getCast(movieId) {
//   //   try {
//   //     setIsLoading(true);
//   //     const response = await API.getCastByID(movieId);
//   //     setCast(response.data.cast);
//   //     return response.data.cast;
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // }

//   async function getCast(movieId) {
//     const response = await API.getCastByID(movieId);
//     return response.data.cast;
//   }

//   useEffect(() => {
//     if (!movieId) return;

//     try {
//       setIsLoading(true);
//       const result = getCast(movieId);
//       setCast(result);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [movieId]);

//   // const result = getCast(movieId);
//   // console.log(result);
//   // if (!result) return <div>No casts information</div>;

//   return (
//     <>
//       {/* {isLoading && <BeatLoader color="#36d7b7" />} */}
//       <Box as="section" px={5}>
//         <ul>
//           {casts.map(({ profile_path, name, character }) => {
//             const image = profile_path
//               ? `${posterPath}${profile_path}`
//               : defaultCastAvatar;

//             return (
//               <li key={name}>
//                 <Image src={image} alt={name} />
//                 <Text>{name}</Text>
//                 <Text>
//                   <span>Character:</span> {character}
//                 </Text>
//               </li>
//             );
//           })}
//         </ul>
//       </Box>
//     </>
//   );
// };

// export default Cast;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';
import defaultCastAvatar from '../../images/defaultCastAvatar.png';
import { Box } from 'components/Box/Box';
import { Image, Text } from './Cast.styled';

import BeatLoader from 'react-spinners/BeatLoader';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const posterPath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (movieId === null) return;

    // console.log(isLoading);
    async function getCast(movieId) {
      try {
        setIsLoading(true);
        const response = await API.getCastByID(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      // console.log('response.data.cast', response.data);
    }

    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        <Box as="section" px={5}>
          {casts ? (
            <ul>
              {casts.map(({ profile_path, name, character }) => {
                const image = profile_path
                  ? `${posterPath}${profile_path}`
                  : defaultCastAvatar;

                return (
                  <li key={name}>
                    <Image src={image} alt={name} />
                    <Text>{name}</Text>
                    <Text>
                      <span>Character:</span> {character}
                    </Text>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>'No casts information'</div>
          )}
        </Box>
      )}
    </>
  );
};

export default Cast;
