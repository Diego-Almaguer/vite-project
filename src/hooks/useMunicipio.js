const useMunicipio = () => {
    const [municipios, setMunicipios] = useState([]);
    
    useEffect(() => {
        GetMunicipio()
            .then(data => {
                setMunicipios(data); // Asegúrate de que setMinisterios existe aquí
            })
            .catch(error => console.error("Error al cargar los ministerios:", error));
    }, [setMunicipios]);

    console.log(municipios);

    return { municipios }; // Retorna tanto el estado y su setter
};

export default useMunicipio