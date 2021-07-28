import { getConnection, sql, queries } from '../database'


export const getProducts = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    console.log(result);
    res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getQtyProducts = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getQtyProducts);
    console.log(result);
    res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const createNewProduct = async (req, res) => {
    const {
        PRODUCTO_ID,
        DESCRIPCION,
        PESO,
        COSTO,
        PRECIO_VENTA,
        PRECIO_VENTA_MAY,
        SUBFAMILIA,
        FAMILIA,
        PROVEEDOR_ID
    } = req.body

    if (PRODUCTO_ID == null || DESCRIPCION == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    try {
        const pool = await getConnection();
    const result = await pool
        .request()
        .input("producto_id", sql.Int, PRODUCTO_ID)
        .input("descripcion", sql.VarChar, DESCRIPCION)
        .input("peso", sql.Int, PESO)
        .input("costo", sql.Int, COSTO)
        .input("precio_venta", sql.Int, PRECIO_VENTA)
        .input("precio_venta_may", sql.Int, PRECIO_VENTA_MAY)
        .input("subfamilia", sql.VarChar, SUBFAMILIA)
        .input("familia", sql.VarChar, FAMILIA)
        .input("proveedor_id", sql.Int, PROVEEDOR_ID)
        .query(queries.postProduct)

    res.json({
        PRODUCTO_ID,
        DESCRIPCION,
        PESO,
        COSTO,
        PRECIO_VENTA,
        PRECIO_VENTA_MAY,
        SUBFAMILIA,
        FAMILIA,
        PROVEEDOR_ID
    })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}