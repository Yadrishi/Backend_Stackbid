const mongoose = require("mongoose");

const historySellerSchema = new mongoose.Schema({
  auctionPlacedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["sold", "unsold"],
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberOfBidders: {
    type: Number,
    required: true,
    default: 0,
  },
  finalDealPrice: {
    type: Number,
    required: true,
  },
});

//module.exports = mongoose.model("HistorySeller", historySellerSchema);

const HistorySeller = mongoose.model("HistorySeller", HistorySeller);
module.exports = HistorySeller;
