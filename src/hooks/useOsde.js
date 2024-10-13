const useOsde = () => {
    const [osdes, setOsdes] = useState([]);
    
    useEffect(() => {
        GetOsde()
            .then(data => {
                setOsdes(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setOsdes]);

    console.log(osdes);

    return { osdes }; // Retorna tanto el estado y su setter
};

export default useOsde