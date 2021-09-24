
function ConfirmarCompraItem(prod) {
    return (
        <>
            <tr>
                <td>{prod.prod.item.id}</td>
                <th>{prod.prod.item.name}</th>
                <td>{prod.prod.quantity}</td>
                <th>{(prod.prod.item.price)}</th>
            </tr>
        </>
    )
}

export default ConfirmarCompraItem
