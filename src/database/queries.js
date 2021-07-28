export const queries = {
    getAllProducts: 'SELECT * FROM PRODUCTO',
    getQtyProducts: 'SELECT COUNT DISTINCT PRODUCTO_ID FROM PRODUCTO',
    postProduct: 'INSERT INTO PRODUCTO (PRODUCTO_ID, DESCRIPCION, PESO, COSTO, PRECIO_VENTA, PRECIO_VENTA_MAY, SUBFAMILIA, FAMILIA, PROVEEDOR_ID) VALUES (@producto_id, @descripcion, @peso, @costo, @precio_venta, @precio_venta_may, @subfamilia, @familia, @proveedor_id)'
}