import { useState, useRef } from "react";

const MENU = [
  // Nasi Lemak
  { id: 1, category: "Nasi Lemak", name: "Biasa", price: 2.00, emoji: "🍛" },
  { id: 2, category: "Nasi Lemak", name: "Daun Pisang", price: 2.00, emoji: "🍛" },
  { id: 3, category: "Nasi Lemak", name: "Ayam Goreng", price: 7.00, emoji: "🍗" },
  { id: 4, category: "Nasi Lemak", name: "Ayam Merah", price: 7.00, emoji: "🍗" },
  { id: 5, category: "Nasi Lemak", name: "Ayam Berlada", price: 7.00, emoji: "🍗" },
  { id: 6, category: "Nasi Lemak", name: "Ayam Rendang", price: 7.00, emoji: "🍗" },
  { id: 7, category: "Nasi Lemak", name: "Ayam Kari", price: 7.00, emoji: "🍗" },
  { id: 8, category: "Nasi Lemak", name: "Daging Rendang", price: 7.00, emoji: "🥩" },
  { id: 9, category: "Nasi Lemak", name: "Kerang Rendang", price: 7.00, emoji: "🦪" },
  { id: 10, category: "Nasi Lemak", name: "Paru Berlada", price: 6.50, emoji: "🥘" },
  { id: 11, category: "Nasi Lemak", name: "Sotong Sambal", price: 6.50, emoji: "🦑" },
  { id: 12, category: "Nasi Lemak", name: "Telur Mata", price: 1.50, emoji: "🍳" },
  { id: 110, category: "Nasi Lemak", name: "Mee Goreng", price: 2.00, emoji: "🍜" },
  { id: 111, category: "Nasi Lemak", name: "Bihun Goreng", price: 2.00, emoji: "🍜" },
  { id: 112, category: "Nasi Lemak", name: "Kuetiau Goreng", price: 2.00, emoji: "🍜" },
  { id: 113, category: "Nasi Lemak", name: "Nasi Goreng", price: 2.00, emoji: "🍳" },
  { id: 114, category: "Nasi Lemak", name: "Bergedil", price: 1.00, emoji: "🥔" },
  { id: 103, category: "Nasi Lemak", name: "Add-on", price: 1.00, emoji: "➕" },

  // Masakan Panas - Nasi Goreng
  { id: 13, category: "Nasi Goreng", name: "Biasa", price: 6.50, emoji: "🍳" },
  { id: 14, category: "Nasi Goreng", name: "Kampung", price: 6.50, emoji: "🍳" },
  { id: 15, category: "Nasi Goreng", name: "Cina", price: 6.50, emoji: "🍳" },
  { id: 16, category: "Nasi Goreng", name: "Ayam / Daging", price: 7.50, emoji: "🍳" },
  { id: 17, category: "Nasi Goreng", name: "Pattaya", price: 8.00, emoji: "🍳" },
  { id: 104, category: "Nasi Goreng", name: "Telur Mata / Dadar", price: 1.50, emoji: "🍳" },
  { id: 18, category: "Nasi Goreng", name: "Add-on", price: 1.00, emoji: "➕" },

  // Masakan Panas - Mee/Kuetiau/Bihun
  { id: 19, category: "Mee / Kuetiau / Bihun", name: "Biasa", price: 6.50, emoji: "🍜" },
  { id: 20, category: "Mee / Kuetiau / Bihun", name: "Mamak", price: 6.50, emoji: "🍜" },
  { id: 21, category: "Mee / Kuetiau / Bihun", name: "Hailam", price: 8.00, emoji: "🍜" },
  { id: 22, category: "Mee / Kuetiau / Bihun", name: "Bandung", price: 8.00, emoji: "🍜" },
  { id: 23, category: "Mee / Kuetiau / Bihun", name: "Ladna", price: 8.00, emoji: "🍜" },
  { id: 24, category: "Mee / Kuetiau / Bihun", name: "Sup", price: 6.00, emoji: "🍲" },
  { id: 25, category: "Mee / Kuetiau / Bihun", name: "Kari", price: 6.00, emoji: "🍲" },
  { id: 26, category: "Mee / Kuetiau / Bihun", name: "Rebus", price: 7.00, emoji: "🍲" },
  { id: 27, category: "Mee / Kuetiau / Bihun", name: "Soto", price: 7.00, emoji: "🍲" },
  { id: 28, category: "Mee / Kuetiau / Bihun", name: "Add-on", price: 1.00, emoji: "➕" },

  // Roti Bakar
  { id: 29, category: "Roti Bakar", name: "Biasa", price: 2.50, emoji: "🍞" },
  { id: 30, category: "Roti Bakar", name: "Telur Leleh", price: 4.50, emoji: "🍞" },
  { id: 31, category: "Roti Bakar", name: "Peanut / Coklat", price: 3.00, emoji: "🍞" },
  { id: 32, category: "Roti Bakar", name: "Add-on", price: 1.00, emoji: "➕" },

  // Roti Canai
  { id: 33, category: "Roti Canai", name: "Kosong", price: 1.50, emoji: "🫓" },
  { id: 34, category: "Roti Canai", name: "Telur", price: 2.50, emoji: "🫓" },
  { id: 35, category: "Roti Canai", name: "Telur Bawang", price: 3.00, emoji: "🫓" },
  { id: 36, category: "Roti Canai", name: "Bawang", price: 2.00, emoji: "🫓" },
  { id: 37, category: "Roti Canai", name: "Kahwin", price: 4.00, emoji: "🫓" },
  { id: 38, category: "Roti Canai", name: "Tampal", price: 2.50, emoji: "🫓" },
  { id: 39, category: "Roti Canai", name: "Boom", price: 2.00, emoji: "🫓" },
  { id: 40, category: "Roti Canai", name: "Planta", price: 2.00, emoji: "🫓" },
  { id: 41, category: "Roti Canai", name: "Sardin", price: 4.50, emoji: "🫓" },
  { id: 42, category: "Roti Canai", name: "Sarang Burung", price: 5.00, emoji: "🫓" },
  { id: 43, category: "Roti Canai", name: "Tsunami", price: 4.50, emoji: "🫓" },
  { id: 44, category: "Roti Canai", name: "Martabak Ayam/Daging", price: 6.00, emoji: "🫓" },
  { id: 45, category: "Roti Canai", name: "Add-on", price: 1.00, emoji: "➕" },

  // Lontong
  { id: 46, category: "Lontong", name: "Biasa", price: 5.00, emoji: "🥘" },
  { id: 47, category: "Lontong", name: "Ayam", price: 8.50, emoji: "🥘" },
  { id: 48, category: "Lontong", name: "Daging Rendang", price: 8.50, emoji: "🥘" },
  { id: 49, category: "Lontong", name: "Kerang Rendang", price: 8.50, emoji: "🥘" },
  { id: 50, category: "Lontong", name: "Paru Berlada", price: 7.50, emoji: "🥘" },
  { id: 51, category: "Lontong", name: "Sotong Sambal", price: 7.50, emoji: "🥘" },
  { id: 52, category: "Lontong", name: "Add-on", price: 2.50, emoji: "➕" },

  // Kuih Muih
  { id: 105, category: "Kuih Muih", name: "Kuih (RM 2.00)", price: 2.00, emoji: "🧁" },
  { id: 106, category: "Kuih Muih", name: "Kuih (RM 3.00)", price: 3.00, emoji: "🧁" },
  { id: 107, category: "Kuih Muih", name: "Kuih (RM 3.50)", price: 3.50, emoji: "🧁" },
  { id: 108, category: "Kuih Muih", name: "Kuih (RM 4.00)", price: 4.00, emoji: "🧁" },
  { id: 109, category: "Kuih Muih", name: "Kuih (RM 4.50)", price: 4.50, emoji: "🧁" },

  // Minuman Panas
  { id: 53, category: "Minuman Panas", name: "Teh Tarik", price: 2.00, emoji: "🧋" },
  { id: 54, category: "Minuman Panas", name: "Kopi", price: 2.00, emoji: "☕" },
  { id: 55, category: "Minuman Panas", name: "Teh O", price: 1.00, emoji: "🍵" },
  { id: 56, category: "Minuman Panas", name: "Kopi O", price: 1.00, emoji: "☕" },
  { id: 57, category: "Minuman Panas", name: "Sirap", price: 1.00, emoji: "🥤" },
  { id: 58, category: "Minuman Panas", name: "Barli", price: 2.00, emoji: "🥤" },
  { id: 59, category: "Minuman Panas", name: "Milo", price: 2.50, emoji: "🥤" },
  { id: 60, category: "Minuman Panas", name: "Milo O", price: 2.00, emoji: "🥤" },
  { id: 61, category: "Minuman Panas", name: "Milo Kosong", price: 2.00, emoji: "🥤" },
  { id: 62, category: "Minuman Panas", name: "Nescafe", price: 2.50, emoji: "☕" },
  { id: 63, category: "Minuman Panas", name: "Nescafe O", price: 2.00, emoji: "☕" },
  { id: 64, category: "Minuman Panas", name: "Horlick", price: 3.00, emoji: "🥤" },
  { id: 65, category: "Minuman Panas", name: "Lemon", price: 3.00, emoji: "🍋" },
  { id: 66, category: "Minuman Panas", name: "Limau", price: 1.50, emoji: "🍋" },
  { id: 67, category: "Minuman Panas", name: "Teh Limau/Halia", price: 2.50, emoji: "🍵" },
  { id: 68, category: "Minuman Panas", name: "Teh O Limau/Halia", price: 2.00, emoji: "🍵" },
  { id: 69, category: "Minuman Panas", name: "Add-on", price: 1.00, emoji: "➕" },

  // Minuman Sejuk
  { id: 70, category: "Minuman Sejuk", name: "Teh Tarik", price: 3.00, emoji: "🧋" },
  { id: 71, category: "Minuman Sejuk", name: "Kopi", price: 3.00, emoji: "☕" },
  { id: 72, category: "Minuman Sejuk", name: "Teh O", price: 2.00, emoji: "🍵" },
  { id: 73, category: "Minuman Sejuk", name: "Kopi O", price: 2.00, emoji: "☕" },
  { id: 74, category: "Minuman Sejuk", name: "Sirap", price: 2.00, emoji: "🥤" },
  { id: 75, category: "Minuman Sejuk", name: "Barli", price: 2.50, emoji: "🥤" },
  { id: 76, category: "Minuman Sejuk", name: "Milo", price: 3.50, emoji: "🥤" },
  { id: 77, category: "Minuman Sejuk", name: "Milo O", price: 2.50, emoji: "🥤" },
  { id: 78, category: "Minuman Sejuk", name: "Milo Kosong", price: 3.00, emoji: "🥤" },
  { id: 79, category: "Minuman Sejuk", name: "Nescafe", price: 3.50, emoji: "☕" },
  { id: 80, category: "Minuman Sejuk", name: "Nescafe O", price: 2.50, emoji: "☕" },
  { id: 81, category: "Minuman Sejuk", name: "Horlick", price: 4.00, emoji: "🥤" },
  { id: 82, category: "Minuman Sejuk", name: "Lemon", price: 3.50, emoji: "🍋" },
  { id: 83, category: "Minuman Sejuk", name: "Limau", price: 2.50, emoji: "🍋" },
  { id: 84, category: "Minuman Sejuk", name: "Teh O Limau/Halia", price: 2.50, emoji: "🍵" },
  { id: 85, category: "Minuman Sejuk", name: "Add-on", price: 1.00, emoji: "➕" },

  // Bungkus
  { id: 86, category: "Bungkus", name: "Teh Tarik", price: 3.50, emoji: "🧋" },
  { id: 87, category: "Bungkus", name: "Kopi", price: 3.50, emoji: "☕" },
  { id: 88, category: "Bungkus", name: "Teh O", price: 2.50, emoji: "🍵" },
  { id: 89, category: "Bungkus", name: "Kopi O", price: 2.50, emoji: "☕" },
  { id: 90, category: "Bungkus", name: "Sirap", price: 2.50, emoji: "🥤" },
  { id: 91, category: "Bungkus", name: "Barli", price: 3.00, emoji: "🥤" },
  { id: 92, category: "Bungkus", name: "Milo", price: 4.00, emoji: "🥤" },
  { id: 93, category: "Bungkus", name: "Milo O", price: 3.00, emoji: "🥤" },
  { id: 94, category: "Bungkus", name: "Milo Kosong", price: 3.50, emoji: "🥤" },
  { id: 95, category: "Bungkus", name: "Nescafe", price: 4.00, emoji: "☕" },
  { id: 96, category: "Bungkus", name: "Nescafe O", price: 3.00, emoji: "☕" },
  { id: 97, category: "Bungkus", name: "Horlick", price: 4.50, emoji: "🥤" },
  { id: 98, category: "Bungkus", name: "Lemon", price: 4.00, emoji: "🍋" },
  { id: 99, category: "Bungkus", name: "Limau", price: 3.00, emoji: "🍋" },
  { id: 100, category: "Bungkus", name: "Teh Limau/Halia", price: 3.00, emoji: "🍵" },
  { id: 101, category: "Bungkus", name: "Teh O Limau/Halia", price: 3.00, emoji: "🍵" },
  { id: 102, category: "Bungkus", name: "Add-on", price: 1.00, emoji: "➕" },
];

const CATEGORIES = ["Semua", ...new Set(MENU.map(i => i.category))];

const KEDAI = {
  nama: "WARUNG SEJATI HOUSE",
  entity: "MAMA NIZA ENTERPRISE",
  tagline: '"Rasa Yang Pasti Digemari" · Since 2010',
  alamat: "Jalan Paya Jaras Hilir, Taman Seri Buloh,\n47000 Sungai Buloh, Selangor",
  tel: "018-403 9768",
  bank: "Bank Islam",
  akaun: "12168010037332",
  pemilik: "Mama Niza Enterprise",
};

let invoiceCounter = parseInt(localStorage.getItem("inv_counter") || "1");
const getInvNo = () => {
  const no = `INV-${String(invoiceCounter).padStart(4, "0")}`;
  return no;
};

export default function App() {
  const [order, setOrder] = useState({});
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [paid, setPaid] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);
  const [invoiceData, setInvoiceData] = useState({ nama: "", syarikat: "", tel: "", alamat: "", nota: "" });
  const [invNo] = useState(getInvNo());
  const [downloading, setDownloading] = useState(false);
  const invoiceRef = useRef(null);

  const filtered = activeCategory === "Semua" ? MENU : MENU.filter(i => i.category === activeCategory);

  const addItem = (item) => {
    if (item.name === "Add-on") {
      const key = `addon-${item.category}-${Date.now()}`;
      setOrder(prev => ({ ...prev, [key]: { ...item, id: key, qty: 1 } }));
    } else {
      setOrder(prev => ({ ...prev, [item.id]: { ...item, qty: (prev[item.id]?.qty || 0) + 1 } }));
    }
  };

  const removeItem = (id) => {
    setOrder(prev => {
      const updated = { ...prev };
      if (updated[id].qty > 1) updated[id] = { ...updated[id], qty: updated[id].qty - 1 };
      else delete updated[id];
      return updated;
    });
  };

  const clearOrder = () => { setOrder({}); setPaid(""); setShowReceipt(false); setShowInvoicePreview(false); setShowInvoiceForm(false); };

  const downloadPDF = async () => {
    setDownloading(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const el = invoiceRef.current;
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = (canvas.height * pdfW) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
      pdf.save(`${invNo}-${invoiceData.nama.replace(/\s+/g, "_")}.pdf`);
    } catch (e) {
      alert("Gagal generate PDF. Cuba semula.");
    }
    setDownloading(false);
  };

  const orderItems = Object.values(order);
  const total = orderItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const change = parseFloat(paid) - total;
  const today = new Date();
  const dateStr = today.toLocaleDateString("ms-MY", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0e0c",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#f0ebe0",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        background: "#1a1713",
        borderBottom: "2px solid #e8b84b",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <span style={{ fontSize: 22 }}>🍽️</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: 2, color: "#e8b84b" }}>WARUNG SEJATI HOUSE</div>
          <div style={{ fontSize: 10, color: "#6b6456", letterSpacing: 1 }}>"Rasa Yang Pasti Digemari" · Since 2010</div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#6b6456" }}>
          {new Date().toLocaleString("ms-MY")}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 52px)" }}>
        {/* Menu Panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Category Tabs */}
          <div style={{
            display: "flex", gap: 5, padding: "8px 12px",
            borderBottom: "1px solid #1e1c18", overflowX: "auto",
            scrollbarWidth: "none", flexWrap: "nowrap",
          }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "5px 11px",
                borderRadius: 4,
                border: "1px solid",
                borderColor: activeCategory === cat ? "#e8b84b" : "#2e2a22",
                background: activeCategory === cat ? "#e8b84b" : "transparent",
                color: activeCategory === cat ? "#0f0e0c" : "#8a7f6e",
                fontSize: 10,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: 0.8,
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}>{cat.toUpperCase()}</button>
            ))}
          </div>

          {/* Menu Grid */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "10px 12px",
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 8, alignContent: "start",
          }}>
            {filtered.map(item => {
              const qty = order[item.id]?.qty || 0;
              const isAddon = item.name === "Add-on";
              return (
                <button key={item.id} onClick={() => addItem(item)} style={{
                  background: qty > 0 ? "#1e1c18" : "#141210",
                  border: `1px solid ${isAddon ? "#3a3020" : qty > 0 ? "#e8b84b" : "#2a2720"}`,
                  borderRadius: 8,
                  padding: "10px 8px",
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#f0ebe0",
                  transition: "all 0.15s",
                  position: "relative",
                }}>
                  {qty > 0 && !isAddon && (
                    <div style={{
                      position: "absolute", top: 5, right: 5,
                      background: "#e8b84b", color: "#0f0e0c",
                      borderRadius: "50%", width: 17, height: 17,
                      fontSize: 9, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>{qty}</div>
                  )}
                  <div style={{ fontSize: 24, marginBottom: 5 }}>{item.emoji}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, marginBottom: 3, lineHeight: 1.3, color: isAddon ? "#c8a84b" : "#f0ebe0" }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#e8b84b", fontWeight: 700 }}>RM {item.price.toFixed(2)}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Order Panel */}
        <div style={{
          width: 275, background: "#141210",
          borderLeft: "1px solid #1e1c18",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid #1e1c18", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#6b6456" }}>
            PESANAN SEMASA
          </div>

          {/* Order List */}
          <div style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
            {orderItems.length === 0 ? (
              <div style={{ padding: "40px 16px", textAlign: "center", color: "#3a3630", fontSize: 11 }}>
                Tiada item lagi.<br />Pilih dari menu.
              </div>
            ) : orderItems.map(item => (
              <div key={item.id} style={{
                display: "flex", alignItems: "center",
                padding: "6px 14px", gap: 7,
                borderBottom: "1px solid #1a1815",
              }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.category !== item.name ? `${item.category}` : ""} {item.name}
                  </div>
                  <div style={{ fontSize: 9, color: "#8a7f6e" }}>RM {item.price.toFixed(2)} × {item.qty}</div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#e8b84b", minWidth: 45, textAlign: "right" }}>
                  RM {(item.price * item.qty).toFixed(2)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <button onClick={() => addItem(item)} style={{ background: "#2a2720", border: "none", color: "#f0ebe0", width: 18, height: 18, borderRadius: 3, cursor: "pointer", fontSize: 11, lineHeight: 1, fontFamily: "inherit" }}>+</button>
                  <button onClick={() => removeItem(item.id)} style={{ background: "#2a2720", border: "none", color: "#f0ebe0", width: 18, height: 18, borderRadius: 3, cursor: "pointer", fontSize: 11, lineHeight: 1, fontFamily: "inherit" }}>−</button>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ borderTop: "1px solid #1e1c18", padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700, color: "#e8b84b", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #2a2720" }}>
              <span>JUMLAH</span>
              <span>RM {total.toFixed(2)}</span>
            </div>

            {/* Payment Input */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 9, color: "#6b6456", marginBottom: 4, letterSpacing: 1 }}>BAYARAN (RM)</div>
              <input
                type="number"
                value={paid}
                onChange={e => setPaid(e.target.value)}
                placeholder="0.00"
                style={{
                  width: "100%", boxSizing: "border-box",
                  background: "#1a1815", border: "1px solid #2e2a22",
                  color: "#f0ebe0", padding: "8px 10px",
                  borderRadius: 6, fontSize: 14, fontWeight: 700,
                  outline: "none", fontFamily: "inherit",
                }}
              />
            </div>

            {paid && parseFloat(paid) >= total && total > 0 && (
              <div style={{
                background: "#1a2e1a", border: "1px solid #2e5c2e",
                borderRadius: 6, padding: "7px 10px", marginBottom: 8,
                display: "flex", justifyContent: "space-between",
                fontSize: 11, color: "#6bc96b",
              }}>
                <span>Baki</span>
                <span style={{ fontWeight: 700 }}>RM {change.toFixed(2)}</span>
              </div>
            )}

            {paid && parseFloat(paid) < total && parseFloat(paid) > 0 && (
              <div style={{
                background: "#2e1a1a", border: "1px solid #5c2e2e",
                borderRadius: 6, padding: "7px 10px", marginBottom: 8,
                fontSize: 10, color: "#c96b6b", textAlign: "center",
              }}>
                Kurang RM {(total - parseFloat(paid)).toFixed(2)}
              </div>
            )}

            {/* Quick amounts */}
            {orderItems.length > 0 && (
              <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                {[...new Set([Math.ceil(total / 5) * 5, Math.ceil(total / 10) * 10, Math.ceil(total / 50) * 50])].slice(0, 3).map(amt => (
                  <button key={amt} onClick={() => setPaid(String(amt))} style={{
                    flex: 1, padding: "5px 0", fontSize: 9, fontWeight: 700,
                    background: "#1e1c18", border: "1px solid #2e2a22",
                    color: "#8a7f6e", borderRadius: 4, cursor: "pointer",
                    fontFamily: "inherit",
                  }}>RM{amt}</button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              <button onClick={clearOrder} style={{
                flex: 1, padding: "9px 0", background: "#1e1c18",
                border: "1px solid #2e2a22", color: "#8a7f6e",
                borderRadius: 6, fontSize: 10, fontWeight: 700,
                cursor: "pointer", letterSpacing: 1, fontFamily: "inherit",
              }}>BATAL</button>
              <button
                disabled={orderItems.length === 0 || !paid || parseFloat(paid) < total}
                onClick={() => setShowReceipt(true)}
                style={{
                  flex: 2, padding: "9px 0",
                  background: orderItems.length > 0 && paid && parseFloat(paid) >= total ? "#e8b84b" : "#2a2720",
                  border: "none",
                  color: orderItems.length > 0 && paid && parseFloat(paid) >= total ? "#0f0e0c" : "#4a4540",
                  borderRadius: 6, fontSize: 10, fontWeight: 700,
                  cursor: orderItems.length > 0 && paid && parseFloat(paid) >= total ? "pointer" : "not-allowed",
                  letterSpacing: 1, fontFamily: "inherit",
                  transition: "all 0.15s",
                }}>BAYAR</button>
            </div>
            <button
              disabled={orderItems.length === 0}
              onClick={() => setShowInvoiceForm(true)}
              style={{
                width: "100%", padding: "9px 0",
                background: orderItems.length > 0 ? "#1e3a2a" : "#1a1815",
                border: `1px solid ${orderItems.length > 0 ? "#2e6b4a" : "#2a2720"}`,
                color: orderItems.length > 0 ? "#6bc96b" : "#4a4540",
                borderRadius: 6, fontSize: 10, fontWeight: 700,
                cursor: orderItems.length > 0 ? "pointer" : "not-allowed",
                letterSpacing: 1, fontFamily: "inherit",
                transition: "all 0.15s",
              }}>📄 JANA INVOICE</button>
          </div>
        </div>
      </div>

      {/* Invoice Form Modal */}
      {showInvoiceForm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }} onClick={() => setShowInvoiceForm(false)}>
          <div style={{ background: "#1a1815", border: "1px solid #2e2a22", borderRadius: 8, padding: "24px 20px", width: 320, fontFamily: "inherit" }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e8b84b", marginBottom: 16, letterSpacing: 1 }}>📄 MAKLUMAT INVOICE</div>
            {[
              { label: "Nama Customer *", key: "nama", placeholder: "Contoh: Ahmad bin Ali" },
              { label: "Syarikat / Organisasi", key: "syarikat", placeholder: "Contoh: Syarikat ABC Sdn Bhd" },
              { label: "No. Telefon", key: "tel", placeholder: "Contoh: 0123456789" },
              { label: "Alamat", key: "alamat", placeholder: "Alamat penuh customer" },
              { label: "Nota / Rujukan", key: "nota", placeholder: "Contoh: Catering Majlis 5 Jun" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 9, color: "#6b6456", marginBottom: 3, letterSpacing: 1 }}>{f.label.toUpperCase()}</div>
                <input
                  value={invoiceData[f.key]}
                  onChange={e => setInvoiceData(prev => ({ ...prev, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", boxSizing: "border-box",
                    background: "#0f0e0c", border: "1px solid #2e2a22",
                    color: "#f0ebe0", padding: "7px 10px",
                    borderRadius: 5, fontSize: 11, outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button onClick={() => setShowInvoiceForm(false)} style={{ flex: 1, padding: "9px 0", background: "#1e1c18", border: "1px solid #2e2a22", color: "#8a7f6e", borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>BATAL</button>
              <button
                disabled={!invoiceData.nama.trim()}
                onClick={() => { setShowInvoiceForm(false); setShowInvoicePreview(true); }}
                style={{ flex: 2, padding: "9px 0", background: invoiceData.nama.trim() ? "#e8b84b" : "#2a2720", border: "none", color: invoiceData.nama.trim() ? "#0f0e0c" : "#4a4540", borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: invoiceData.nama.trim() ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
                JANA INVOICE →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Preview Modal */}
      {showInvoicePreview && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20 }}>
          <div style={{ background: "#fff", color: "#111", width: "100%", maxWidth: 620, maxHeight: "90vh", overflowY: "auto", borderRadius: 4, boxShadow: "0 20px 60px rgba(0,0,0,0.7)" }}>

            {/* Action bar */}
            <div style={{ background: "#1a1815", padding: "10px 16px", display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#8a7f6e", fontSize: 11, flex: 1, fontFamily: "monospace" }}>Preview Invoice · {invNo}</span>
              <button onClick={downloadPDF} disabled={downloading} style={{ padding: "7px 16px", background: downloading ? "#a07820" : "#e8b84b", border: "none", borderRadius: 5, fontSize: 11, fontWeight: 700, cursor: downloading ? "wait" : "pointer", fontFamily: "monospace" }}>
                {downloading ? "⏳ Generating..." : "⬇️ DOWNLOAD PDF"}
              </button>
              <button onClick={() => setShowInvoicePreview(false)} style={{ padding: "7px 12px", background: "#2a2720", border: "none", color: "#f0ebe0", borderRadius: 5, fontSize: 11, cursor: "pointer", fontFamily: "monospace" }}>✕</button>
            </div>

            {/* Invoice Content */}
            <div ref={invoiceRef} id="invoice-content" style={{ padding: "40px 44px", fontFamily: "'Arial', sans-serif", background: "#fff" }}>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#b8860b", letterSpacing: 1 }}>🍽️ {KEDAI.nama}</div>
                  <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{KEDAI.entity}</div>
                  <div style={{ fontSize: 10, color: "#777", marginTop: 6, lineHeight: 1.6, whiteSpace: "pre-line" }}>{KEDAI.alamat}</div>
                  <div style={{ fontSize: 10, color: "#777" }}>Tel: {KEDAI.tel}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#b8860b", letterSpacing: 3 }}>INVOICE</div>
                  <div style={{ fontSize: 12, color: "#333", marginTop: 6 }}><b>No:</b> {invNo}</div>
                  <div style={{ fontSize: 12, color: "#333" }}><b>Tarikh:</b> {dateStr}</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "2px solid #b8860b", marginBottom: 24 }} />

              {/* Bill To */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#b8860b", letterSpacing: 2, marginBottom: 8 }}>KEPADA:</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{invoiceData.nama}</div>
                {invoiceData.syarikat && <div style={{ fontSize: 12, color: "#333" }}>{invoiceData.syarikat}</div>}
                {invoiceData.tel && <div style={{ fontSize: 11, color: "#555" }}>Tel: {invoiceData.tel}</div>}
                {invoiceData.alamat && <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{invoiceData.alamat}</div>}
                {invoiceData.nota && <div style={{ fontSize: 11, color: "#555", marginTop: 4 }}>Rujukan: <i>{invoiceData.nota}</i></div>}
              </div>

              {/* Items Table */}
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24, fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#b8860b", color: "#fff" }}>
                    <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>BIL</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>PENERANGAN</th>
                    <th style={{ padding: "8px 10px", textAlign: "center", fontWeight: 700 }}>QTY</th>
                    <th style={{ padding: "8px 10px", textAlign: "right", fontWeight: 700 }}>HARGA UNIT</th>
                    <th style={{ padding: "8px 10px", textAlign: "right", fontWeight: 700 }}>JUMLAH</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, idx) => (
                    <tr key={item.id} style={{ background: idx % 2 === 0 ? "#fff" : "#fdf8f0", borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "7px 10px", color: "#555" }}>{idx + 1}</td>
                      <td style={{ padding: "7px 10px" }}>{item.category} — {item.name}</td>
                      <td style={{ padding: "7px 10px", textAlign: "center" }}>{item.qty}</td>
                      <td style={{ padding: "7px 10px", textAlign: "right" }}>RM {item.price.toFixed(2)}</td>
                      <td style={{ padding: "7px 10px", textAlign: "right", fontWeight: 600 }}>RM {(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 32 }}>
                <div style={{ width: 220 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", background: "#b8860b", color: "#fff", borderRadius: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 13 }}>JUMLAH KESELURUHAN</span>
                    <span style={{ fontWeight: 900, fontSize: 13 }}>RM {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div style={{ background: "#fdf8f0", border: "1px solid #e8d89a", borderRadius: 6, padding: "14px 16px", marginBottom: 28 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#b8860b", letterSpacing: 2, marginBottom: 8 }}>MAKLUMAT PEMBAYARAN:</div>
                <div style={{ fontSize: 12 }}><b>Bank:</b> {KEDAI.bank}</div>
                <div style={{ fontSize: 12 }}><b>No. Akaun:</b> {KEDAI.akaun}</div>
                <div style={{ fontSize: 12 }}><b>Atas Nama:</b> {KEDAI.pemilik}</div>
              </div>

              {/* Footer */}
              <div style={{ borderTop: "1px solid #ddd", paddingTop: 14, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: "#999" }}>Terima kasih atas kepercayaan anda · {KEDAI.tagline}</div>
                <div style={{ fontSize: 10, color: "#bbb", marginTop: 3 }}>Sebarang pertanyaan: {KEDAI.tel}</div>
              </div>
            </div>
          </div>

        </div>
      )}

      {showReceipt && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100,
        }} onClick={() => clearOrder()}>
          <div style={{
            background: "#fdfaf4", color: "#1a1710",
            width: 280, borderRadius: 4,
            padding: "20px 18px",
            fontFamily: "'DM Mono', 'Courier New', monospace",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            maxHeight: "85vh", overflowY: "auto",
          }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 18 }}>🍽️</div>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: 2 }}>WARUNG SEJATI HOUSE</div>
              <div style={{ fontSize: 9, color: "#8a7f6e" }}>"Rasa Yang Pasti Digemari"</div>
              <div style={{ fontSize: 9, color: "#8a7f6e" }}>{new Date().toLocaleString("ms-MY")}</div>
            </div>
            <div style={{ borderTop: "1px dashed #ccc", borderBottom: "1px dashed #ccc", padding: "8px 0", marginBottom: 8 }}>
              {orderItems.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3 }}>
                  <span style={{ flex: 1, marginRight: 8 }}>{item.qty}x {item.category} {item.name}</span>
                  <span style={{ whiteSpace: "nowrap" }}>RM {(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span>JUMLAH</span><span>RM {total.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, display: "flex", justifyContent: "space-between", color: "#5a5040" }}>
              <span>Bayar</span><span>RM {parseFloat(paid).toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, display: "flex", justifyContent: "space-between", color: "#5a5040", marginBottom: 14 }}>
              <span>Baki</span><span>RM {change.toFixed(2)}</span>
            </div>
            <div style={{ textAlign: "center", fontSize: 10, color: "#8a7f6e", marginBottom: 10 }}>
              Terima kasih! Datang lagi 😊
            </div>
            <button onClick={clearOrder} style={{
              width: "100%", padding: "9px 0",
              background: "#1a1710", color: "#fdfaf4",
              border: "none", borderRadius: 4,
              fontSize: 10, fontWeight: 700,
              cursor: "pointer", letterSpacing: 1,
              fontFamily: "inherit",
            }}>PESANAN BARU</button>
          </div>
        </div>
      )}
    </div>
  );
}
