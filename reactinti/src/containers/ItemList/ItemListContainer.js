import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";


function ItemListContainer({greeting="Lorem ipsum dolor sit amet, consectetur adipiscing elit"}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    const {sex}=useParams()
    const productosLista=[
        {id:1, name:"sweater",sexo:"m",categoria:"abrigos-m", description: "rosa con detalles",stock:3, img:"https://statics.glamit.com.ar/media/catalog/product/m/i/mimo_i20b38033y_3y_1.jpg"},
        {id:2, name:"camisa",sexo:"m",categoria:"remeras-m", description: "a cuadros",stock:4, img:"https://d368r8jqz0fwvm.cloudfront.net/2698-product_lg/camisa-de-mujer-pehuen-m-c.jpg"},
        {id:3, name:"jeans",sexo:"m",categoria:"jeans-m", description: "jean modelo 150",stock:2, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/026/727/products/ab309fea-6533-4542-bbee-51205c459e94_nube-0a6ff49fe68625fe0e15995722916344-1024-1024.jpg"},
        {id:4, name:"remera",sexo:"m",categoria:"remeras-m", description: "lunas",stock:1, img:"https://http2.mlstatic.com/D_NQ_NP_651950-MLA44093903622_112020-W.jpg"},
        {id:5, name:"campera",sexo:"m",categoria:"abrigos-m", description: "verde",stock:5, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/005/896/products/productos-tamano-ok-101-9d720fc342ef8522cd15816172245682-1024-1024.png"},
        {id:6, name:"jean",sexo:"m",categoria:"jeans-m", description: "negro",stock:3, img:"https://http2.mlstatic.com/D_NQ_NP_572221-MLA20730722064_052016-O.jpg"}, 
        {id:7, name:"sweater",sexo:"h",categoria:"abrigos-h", description: "beige",stock:3, img:"https://statics.glamit.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grisino_g3je02_mg_1.jpg"},
        {id:8, name:"camisa",sexo:"h",categoria:"remeras-h", description: "a cuadros",stock:4, img:"https://http2.mlstatic.com/D_NQ_NP_990411-MLA31020056377_062019-W.jpg"},
        {id:9, name:"jeans",sexo:"h",categoria:"jeans-h", description: "jean",stock:2, img:"https://http2.mlstatic.com/D_NQ_NP_876804-MLA45739864526_042021-O.jpg"},
        {id:10, name:"buzo",sexo:"h",categoria:"abrigos-h", description: "lunas",stock:1, img:"data:image/jpeg;base64,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"},
        {id:11, name:"campera",sexo:"h",categoria:"abrigos-h", description: "verde",stock:5, img:"https://static.dafiti.com.ar/p/adidasoriginals-8129-157264-1-product.jpg"},
        {id:12, name:"chomba",sexo:"h",categoria:"remera-h", description: "cataratas",stock:3, img:"https://www.guantexindustrial.com.ar/2963-large_default/chomba-pique-gris-talle-l.jpg"}    
    ];
    let getItems = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productosLista);
            reject("no se encontro/no hay stock");
        },2000);
      })
    useEffect(() => {
        if (setLoading){
            setLoading(true)
        }
        if (category===undefined) {
            getItems
            .then((resp)=>{
                setProducts(resp)
                setLoading(false)
                
            })}else{
                getItems
                .then((resp)=>{
                    setProducts(resp.filter( r => category === r.categoria))
                    setLoading(false)
                })
            }
            if (sex !== undefined){
                getItems
                .then((resp)=>{
                    setProducts(resp.filter( r => sex === r.sexo))
                    setLoading(false)
                })
            }
    },[category, sex])
    
    

    return (
        <div>
            {loading ? <Loading/>
            :
            <ItemList productos={products}/>
        }
        </div>
    )
}

export default ItemListContainer
