// const Vehicles = () => {
//     const [vehicles, setVehicles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);
    
//     useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const data = await (await axios.get("/api/vehicles/get")).data;
//         setVehicles(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     })();
//   }, []);

// }