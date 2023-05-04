import * as DCPService from "../services/dcp.service.js";

export const getUniqueWays = (req, res) => {
  const { steps } = req.params;
  const { body: configurations } = req;

  if (!steps || isNaN(Number(steps ?? "NaN")) || Number(steps) % 1 !== 0) {
    return res.status(400).json({
      statis: "Bad Request",
      error:
        "steps is a required parameter and its value must be a positive integer.",
    });
  }

  try {
    let result;

    if (configurations) {
      result = DCPService.getUniqueWays(Number(steps ?? 0), configurations);
    } else {
      result = DCPService.getUniqueWays(Number(steps ?? 0));
    }

    return res.status(200).json({ status: "OK", result: result });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", error: `${error.message}` });
  }
};

export const dcp1 = (req, res) => {
  const { k } = req.params;
  const { list } = req.body;

  try {
    return res
      .status(200)
      .json({ status: "OK", result: DCPService.dcp1(list, Number(k)) });
  } catch (error) {
    res
      .status(500)
      .json({ status: "Internal Server Error", error: `${error.message}` });
  }
};
