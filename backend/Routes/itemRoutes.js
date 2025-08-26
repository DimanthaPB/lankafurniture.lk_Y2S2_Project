const express = require("express");
const router = express.Router();
const itemController = require("../Controller/itemController");
const sendEmail = require("../utils/email");

router.post("/", itemController.addItem);
router.get("/", itemController.getItems);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

router.get("/low-stock", itemController.getLowStock);
router.get("/report", itemController.generateReport);
router.get("/report/pdf", itemController.generateReportPDF);
router.get("/sales", itemController.getSalesData);


router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();

    // Check if item is low stock
    if (item.quantity < 5) {
      await sendEmail(
        "pixelbluegfx@gmail.com", // <-- email of the person to notify
        "⚠ Low Stock Alert",
        `The item "${item.name}" is low in stock.\n\nQuantity left: ${item.quantity}`
      );
    }

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get low stock items
router.get("/low-stock", async (req, res) => {
  try {
    const lowStockItems = await Item.find({ quantity: { $lt: 5 } });

    if (lowStockItems.length > 0) {
      const message = lowStockItems
        .map((item) => `${item.name} - Qty: ${item.quantity}`)
        .join("\n");

      await sendEmail(
        "pixelbluegfx@gmail.com",
        "⚠ Low Stock Report",
        `The following items are low in stock:\n\n${message}`
      );
    }

    res.json(lowStockItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
