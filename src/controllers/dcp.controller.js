import * as DCPService from "../services/dcp.service.js";

export const getUniqueWays = (req, res) => {
    const { steps, max } = req.params;

    if (!steps || isNaN(Number(steps ?? "NaN")) || Number(steps) % 1 !== 0) {
        return res.status(400).json({ statis: "Bad Request", error: "steps parameter must be a positive integer." });
    }

    try {
        const result = DCPService.getUniqueWays(Number(steps ?? 0), Number(max ?? 2));

        return res.status(200).json({ status: "OK", result: result });
    } catch (error) {
        return res.status(500).json({ status: "Internal Server Error", error: `${error.message}`});
    }
}
