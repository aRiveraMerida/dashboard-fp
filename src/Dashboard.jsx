import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, CartesianGrid, AreaChart, Area, ComposedChart } from "recharts";

const DATA = {"kpis":{"totalAlumnos":5673,"importeTotal":23515562.45,"precioVentaTotal":8726009.14,"descuentoTotal":496485.78,"ticketMedio":4145.17,"precioVentaMedio":1538.16},"porCurso":[{"categoria":"PRIMERO","alumnos":931,"importe":3874141.18,"precioVenta":1896307.92,"descuento":100196.27,"ticketMedio":4161.27},{"categoria":"SEGUNDO","alumnos":1849,"importe":8344134.46,"precioVenta":3033943.88,"descuento":199121.58,"ticketMedio":4512.78},{"categoria":"M\u00c1STER","alumnos":1518,"importe":6816692.04,"precioVenta":1453017.82,"descuento":89854.46,"ticketMedio":4490.57},{"categoria":"MATR\u00cdCULA","alumnos":467,"importe":1507892.06,"precioVenta":438962.03,"descuento":11282.23,"ticketMedio":3228.89},{"categoria":"SANIDAD","alumnos":733,"importe":2487986.68,"precioVenta":1679304.18,"descuento":83672.91,"ticketMedio":3394.25},{"categoria":"NEGOCIO","alumnos":61,"importe":217460.59,"precioVenta":129094.92,"descuento":4191.12,"ticketMedio":3564.93},{"categoria":"TECH","alumnos":19,"importe":53866.71,"precioVenta":25170.38,"descuento":1886.62,"ticketMedio":2835.09},{"categoria":"RESERVA","alumnos":29,"importe":20624.81,"precioVenta":16824.81,"descuento":393.12,"ticketMedio":711.2},{"categoria":"OTROS","alumnos":65,"importe":186765.92,"precioVenta":51483.2,"descuento":5887.47,"ticketMedio":2873.32},{"categoria":"SIN CLASIFICAR","alumnos":1,"importe":5998.0,"precioVenta":1900.0,"descuento":0.0,"ticketMedio":5998.0}],"porFamilia":[{"familia":"Matr\u00edcula","alumnos":751,"importe":3251241.28,"ticketMedio":4329.22},{"familia":"ASIR","alumnos":631,"importe":2694783.26,"ticketMedio":4270.65},{"familia":"Marketing","alumnos":539,"importe":2395396.57,"ticketMedio":4444.15},{"familia":"Prometeo","alumnos":528,"importe":2341037.5,"ticketMedio":4433.78},{"familia":"DAW","alumnos":458,"importe":1709369.14,"ticketMedio":3732.25},{"familia":"Ciberseguridad","alumnos":428,"importe":1949655.02,"ticketMedio":4555.27},{"familia":"Data & Analytics","alumnos":424,"importe":1814387.19,"ticketMedio":4279.22},{"familia":"SMR","alumnos":316,"importe":1404832.38,"ticketMedio":4445.67},{"familia":"TCAE/Enfermer\u00eda","alumnos":217,"importe":465176.8,"ticketMedio":2143.67},{"familia":"Desarrollo Web","alumnos":188,"importe":718167.37,"ticketMedio":3820.04},{"familia":"Diet\u00e9tica","alumnos":161,"importe":560637.6,"ticketMedio":3482.22},{"familia":"Laboratorio","alumnos":158,"importe":591390.5,"ticketMedio":3742.98},{"familia":"Pr\u00f3tesis Dental","alumnos":141,"importe":820505.07,"ticketMedio":5819.18},{"familia":"Emergencias","alumnos":140,"importe":595608.5,"ticketMedio":4254.35},{"familia":"Farmacia","alumnos":118,"importe":424328.0,"ticketMedio":3596.0},{"familia":"Higiene Bucodental","alumnos":86,"importe":357100.0,"ticketMedio":4152.33},{"familia":"Otros","alumnos":70,"importe":153305.1,"ticketMedio":2190.07},{"familia":"Admin y Finanzas","alumnos":54,"importe":265171.7,"ticketMedio":4910.59},{"familia":"Comercio Intl.","alumnos":52,"importe":196061.26,"ticketMedio":3770.41},{"familia":"CAD/CAM","alumnos":50,"importe":337875.07,"ticketMedio":6757.5},{"familia":"Gesti\u00f3n Adm.","alumnos":50,"importe":159802.3,"ticketMedio":3196.05},{"familia":"DAM","alumnos":30,"importe":65768.09,"ticketMedio":2192.27},{"familia":"Reserva","alumnos":29,"importe":20624.81,"ticketMedio":711.2},{"familia":"iPad","alumnos":18,"importe":74244.67,"ticketMedio":4124.7},{"familia":"Supply Chain","alumnos":14,"importe":55481.01,"ticketMedio":3962.93},{"familia":"Ecommerce","alumnos":13,"importe":54584.0,"ticketMedio":4198.77},{"familia":"Recobro","alumnos":8,"importe":33030.26,"ticketMedio":4128.78},{"familia":"MBA","alumnos":1,"importe":5998.0,"ticketMedio":5998.0}],"porMes":[{"mes":"2024-02","alumnos":10,"importe":40057.0},{"mes":"2024-04","alumnos":2,"importe":8240.0},{"mes":"2024-05","alumnos":9,"importe":34029.0},{"mes":"2024-08","alumnos":1,"importe":3900.0},{"mes":"2024-09","alumnos":2,"importe":3199.0},{"mes":"2024-10","alumnos":1,"importe":2200.0},{"mes":"2024-11","alumnos":103,"importe":393260.32},{"mes":"2024-12","alumnos":69,"importe":281102.7},{"mes":"2025-01","alumnos":295,"importe":1081715.82},{"mes":"2025-02","alumnos":270,"importe":1094899.64},{"mes":"2025-03","alumnos":276,"importe":966301.58},{"mes":"2025-04","alumnos":265,"importe":1026907.94},{"mes":"2025-05","alumnos":468,"importe":1790592.0},{"mes":"2025-06","alumnos":502,"importe":1915013.21},{"mes":"2025-07","alumnos":606,"importe":2423247.31},{"mes":"2025-08","alumnos":327,"importe":1261485.61},{"mes":"2025-09","alumnos":442,"importe":1813674.36},{"mes":"2025-10","alumnos":360,"importe":1490834.58},{"mes":"2025-11","alumnos":214,"importe":848840.15},{"mes":"2025-12","alumnos":317,"importe":1432513.04},{"mes":"2026-01","alumnos":287,"importe":1404571.67},{"mes":"2026-02","alumnos":355,"importe":1757893.4},{"mes":"2026-03","alumnos":164,"importe":867776.82},{"mes":"2026-04","alumnos":21,"importe":81021.36},{"mes":"2026-05","alumnos":37,"importe":165321.0},{"mes":"2026-06","alumnos":34,"importe":214363.0},{"mes":"2026-07","alumnos":9,"importe":31788.0},{"mes":"2026-08","alumnos":13,"importe":75480.0},{"mes":"2026-09","alumnos":58,"importe":295386.02},{"mes":"2026-10","alumnos":40,"importe":168464.02},{"mes":"2026-11","alumnos":35,"importe":125369.06},{"mes":"2026-12","alumnos":81,"importe":416114.84}],"porCentro":[{"centro":"Madrid","alumnos":3348,"importe":14720563.59},{"centro":"Sin asignar","alumnos":1606,"importe":5598670.78},{"centro":"Barcelona","alumnos":688,"importe":2995661.08},{"centro":"Zaragoza","alumnos":31,"importe":200667.0}],"porUTM":[{"utm":"Sin UTM","alumnos":1778,"importe":7407882.26},{"utm":"adwords","alumnos":1616,"importe":7088349.33},{"utm":"google","alumnos":1216,"importe":4838857.03},{"utm":"facebook","alumnos":558,"importe":2141613.69},{"utm":"hs_email","alumnos":72,"importe":287657.84},{"utm":"_____","alumnos":69,"importe":273827.0},{"utm":"Aprendemas","alumnos":65,"importe":295396.04},{"utm":"youtube","alumnos":50,"importe":188838.0},{"utm":"tiktok","alumnos":46,"importe":177046.5},{"utm":"dondeestudiar","alumnos":38,"importe":149505.58},{"utm":"chatgpt.com","alumnos":31,"importe":119967.0},{"utm":"Advertisement","alumnos":27,"importe":84019.75},{"utm":"linkedin","alumnos":20,"importe":67506.6},{"utm":"hs_automation","alumnos":19,"importe":80551.0},{"utm":"activecampaign","alumnos":18,"importe":66376.0}],"porCountry":[{"country":"International","alumnos":582,"importe":2668223.48},{"country":"Latam","alumnos":22,"importe":100232.31},{"country":"Sin dato","alumnos":17,"importe":62433.0},{"country":"Spain","alumnos":5052,"importe":20684673.66}],"porPropietario":[{"propietario":"TPBS Operations","alumnos":992,"importe":2812950.45},{"propietario":"Clara Ortiz Blanco","alumnos":517,"importe":2285928.97},{"propietario":"Raquel Payol Esteban","alumnos":424,"importe":2086370.25},{"propietario":"Ramiro Merino","alumnos":308,"importe":1484500.47},{"propietario":"Susana Burguillos Cenzano","alumnos":270,"importe":1168132.56},{"propietario":"Rafael Mu\u00f1oz Sol\u00eds","alumnos":262,"importe":1171879.48},{"propietario":"Teresa Mi\u00f1ambres","alumnos":250,"importe":851154.51},{"propietario":"Ana Alcaraz","alumnos":249,"importe":1356569.0},{"propietario":"Maria Jose Figueira","alumnos":228,"importe":970685.88},{"propietario":"Aitor Granado","alumnos":224,"importe":1095954.27},{"propietario":"Blanca Lopez","alumnos":224,"importe":964600.04},{"propietario":"Eva Simarro","alumnos":203,"importe":972791.06},{"propietario":"Mariano Garc\u00eda-Moreno Bascones","alumnos":200,"importe":803790.01},{"propietario":"Marta Heras Portillo","alumnos":196,"importe":816440.0},{"propietario":"Bel\u00e9n Pescador","alumnos":184,"importe":803578.2}],"porModalidad":[{"modalidad":"Online","alumnos":876,"importe":3056313.55},{"modalidad":"Presencial","alumnos":614,"importe":3190766.81},{"modalidad":"Sin especificar","alumnos":4183,"importe":17268482.09}],"detallePrimero":[{"producto":"ASIR 1 curso","alumnos":154,"importe":561469.99,"ticketMedio":3645.91},{"producto":"Matricula FP Febrero Primer A\u00f1o","alumnos":124,"importe":537092.1,"ticketMedio":4331.39},{"producto":"DAW - Primer curso","alumnos":103,"importe":353662.0,"ticketMedio":3433.61},{"producto":"T\u00e9cnico Marketing y publicidad - Primer Curso","alumnos":97,"importe":337428.0,"ticketMedio":3478.64},{"producto":"SMR - Primer curso - Presencial","alumnos":91,"importe":453582.0,"ticketMedio":4984.42},{"producto":"ASIR 1 curso - Presencial","alumnos":89,"importe":504195.65,"ticketMedio":5665.12},{"producto":"ASIR - Primer curso - Febrero","alumnos":74,"importe":330701.39,"ticketMedio":4468.94},{"producto":"SMR - Primer curso","alumnos":72,"importe":261940.0,"ticketMedio":3638.06},{"producto":"DAW - Primer curso - Febrero","alumnos":69,"importe":276555.05,"ticketMedio":4008.04},{"producto":"DAW - Primer curso - Presencial","alumnos":41,"importe":204627.0,"ticketMedio":4990.9},{"producto":"M\u00e1ster DAW - Primer Curso (Octubre -60%)","alumnos":7,"importe":21993.0,"ticketMedio":3141.86},{"producto":"Comercial Internacional - 1C - Febrero","alumnos":5,"importe":13465.0,"ticketMedio":2693.0},{"producto":"Recuperaci\u00f3n Primer A\u00f1o","alumnos":2,"importe":8908.0,"ticketMedio":4454.0},{"producto":"Asignaturas primer curso DAW","alumnos":1,"importe":4230.0,"ticketMedio":4230.0},{"producto":"SMR + Desarrollo Web - Primer curso","alumnos":1,"importe":2799.0,"ticketMedio":2799.0},{"producto":"SMR - Primer Curso","alumnos":1,"importe":1493.0,"ticketMedio":1493.0}],"detalleSegundo":[{"producto":"Matricula FP - Segundo Curso","alumnos":143,"importe":861620.42,"ticketMedio":6025.32},{"producto":"M\u00e1ster DAW - Segundo Curso","alumnos":125,"importe":460177.81,"ticketMedio":3681.42},{"producto":"M\u00e1ster Marketing Digital - 2C","alumnos":123,"importe":546687.13,"ticketMedio":4444.61},{"producto":"M\u00e1ster Data & Analytics - 2C","alumnos":112,"importe":452997.06,"ticketMedio":4044.62},{"producto":"FP - DAW - Segundo curso","alumnos":102,"importe":259743.65,"ticketMedio":2546.51},{"producto":"Matricula FP - 2C Febrero","alumnos":99,"importe":482207.04,"ticketMedio":4870.78},{"producto":"ASIR - Segundo curso","alumnos":97,"importe":253636.81,"ticketMedio":2614.81},{"producto":"ASIR - Segundo Curso - Online","alumnos":71,"importe":350702.99,"ticketMedio":4939.48},{"producto":"M\u00e1ster Finance & Data - Curso 2","alumnos":63,"importe":258301.0,"ticketMedio":4100.02},{"producto":"MKT y Publicidad - 2C Online Recu","alumnos":51,"importe":274013.14,"ticketMedio":5372.81},{"producto":"ASIR - Segundo curso - Febrero","alumnos":48,"importe":222123.4,"ticketMedio":4627.57},{"producto":"Diet\u00e9tica Online - 2C Recu","alumnos":48,"importe":175470.8,"ticketMedio":3655.64},{"producto":"DAW - 2C - Febrero","alumnos":46,"importe":185762.04,"ticketMedio":4038.31},{"producto":"Laboratorio Online - 2C","alumnos":46,"importe":170966.0,"ticketMedio":3716.65},{"producto":"ASIR - 2C - Presencial","alumnos":42,"importe":173242.8,"ticketMedio":4124.83},{"producto":"DAW Online - 2C Recu","alumnos":40,"importe":201743.0,"ticketMedio":5043.57},{"producto":"Emergencias Online - 2C","alumnos":38,"importe":139380.0,"ticketMedio":3667.89},{"producto":"SMR - 2C - Presencial","alumnos":38,"importe":147748.96,"ticketMedio":3888.13},{"producto":"Pr\u00f3tesis Dental - 2C","alumnos":37,"importe":264085.98,"ticketMedio":7137.46},{"producto":"SMR - 2C - Online","alumnos":36,"importe":174970.86,"ticketMedio":4860.3},{"producto":"FP - SMR - Segundo curso","alumnos":35,"importe":80875.0,"ticketMedio":2310.71},{"producto":"Farmacia Online - 2C","alumnos":35,"importe":127282.0,"ticketMedio":3636.63}],"mesCurso":[{"mes":"2024-11","curso":"M\u00c1STER","alumnos":60,"importe":231195.32},{"mes":"2024-11","curso":"PRIMERO","alumnos":22,"importe":80450.0},{"mes":"2024-11","curso":"SEGUNDO","alumnos":20,"importe":79450.0},{"mes":"2024-12","curso":"M\u00c1STER","alumnos":39,"importe":163369.52},{"mes":"2024-12","curso":"PRIMERO","alumnos":11,"importe":47982.0},{"mes":"2024-12","curso":"SEGUNDO","alumnos":17,"importe":61953.18},{"mes":"2025-01","curso":"M\u00c1STER","alumnos":113,"importe":461458.47},{"mes":"2025-01","curso":"PRIMERO","alumnos":56,"importe":200158.0},{"mes":"2025-01","curso":"SEGUNDO","alumnos":80,"importe":303305.03},{"mes":"2025-02","curso":"M\u00c1STER","alumnos":106,"importe":484900.73},{"mes":"2025-02","curso":"PRIMERO","alumnos":45,"importe":196100.0},{"mes":"2025-02","curso":"SEGUNDO","alumnos":71,"importe":303775.0},{"mes":"2025-03","curso":"M\u00c1STER","alumnos":95,"importe":383192.28},{"mes":"2025-03","curso":"PRIMERO","alumnos":56,"importe":198586.0},{"mes":"2025-03","curso":"SEGUNDO","alumnos":73,"importe":260199.3},{"mes":"2025-04","curso":"M\u00c1STER","alumnos":82,"importe":351387.88},{"mes":"2025-04","curso":"PRIMERO","alumnos":38,"importe":129971.0},{"mes":"2025-04","curso":"SEGUNDO","alumnos":74,"importe":360568.74},{"mes":"2025-05","curso":"M\u00c1STER","alumnos":157,"importe":667800.07},{"mes":"2025-05","curso":"PRIMERO","alumnos":83,"importe":340753.39},{"mes":"2025-05","curso":"SEGUNDO","alumnos":162,"importe":610958.38},{"mes":"2025-06","curso":"M\u00c1STER","alumnos":151,"importe":629660.94},{"mes":"2025-06","curso":"PRIMERO","alumnos":82,"importe":318399.05},{"mes":"2025-06","curso":"SEGUNDO","alumnos":194,"importe":753888.84},{"mes":"2025-07","curso":"M\u00c1STER","alumnos":171,"importe":782799.28},{"mes":"2025-07","curso":"PRIMERO","alumnos":105,"importe":418918.0},{"mes":"2025-07","curso":"SEGUNDO","alumnos":184,"importe":808072.06},{"mes":"2025-08","curso":"M\u00c1STER","alumnos":75,"importe":329330.0},{"mes":"2025-08","curso":"PRIMERO","alumnos":57,"importe":214362.0},{"mes":"2025-08","curso":"SEGUNDO","alumnos":108,"importe":473395.01},{"mes":"2025-09","curso":"M\u00c1STER","alumnos":89,"importe":386170.98},{"mes":"2025-09","curso":"PRIMERO","alumnos":70,"importe":275397.0},{"mes":"2025-09","curso":"SEGUNDO","alumnos":145,"importe":699896.98},{"mes":"2025-10","curso":"M\u00c1STER","alumnos":76,"importe":365884.51},{"mes":"2025-10","curso":"PRIMERO","alumnos":43,"importe":192479.0},{"mes":"2025-10","curso":"SEGUNDO","alumnos":135,"importe":595155.01},{"mes":"2025-11","curso":"M\u00c1STER","alumnos":56,"importe":279035.05},{"mes":"2025-11","curso":"PRIMERO","alumnos":41,"importe":163177.02},{"mes":"2025-11","curso":"SEGUNDO","alumnos":62,"importe":277899.02},{"mes":"2025-12","curso":"M\u00c1STER","alumnos":93,"importe":443329.02},{"mes":"2025-12","curso":"PRIMERO","alumnos":60,"importe":271630.01},{"mes":"2025-12","curso":"SEGUNDO","alumnos":103,"importe":483090.94},{"mes":"2026-01","curso":"M\u00c1STER","alumnos":47,"importe":272663.0},{"mes":"2026-01","curso":"PRIMERO","alumnos":52,"importe":237349.0},{"mes":"2026-01","curso":"SEGUNDO","alumnos":91,"importe":472670.0},{"mes":"2026-02","curso":"M\u00c1STER","alumnos":32,"importe":179046.0},{"mes":"2026-02","curso":"PRIMERO","alumnos":53,"importe":272985.73},{"mes":"2026-02","curso":"SEGUNDO","alumnos":122,"importe":709163.0},{"mes":"2026-03","curso":"M\u00c1STER","alumnos":16,"importe":109951.97},{"mes":"2026-03","curso":"PRIMERO","alumnos":14,"importe":103174.98},{"mes":"2026-03","curso":"SEGUNDO","alumnos":78,"importe":415543.97}],"cursoxFamilia":[{"curso":"M\u00c1STER","familia":"Prometeo","alumnos":528,"importe":2341037.5,"ticketMedio":4433.78},{"curso":"M\u00c1STER","familia":"Ciberseguridad","alumnos":406,"importe":1819305.04,"ticketMedio":4481.05},{"curso":"MATR\u00cdCULA","familia":"Matr\u00edcula","alumnos":340,"importe":1237236.67,"ticketMedio":3638.93},{"curso":"PRIMERO","familia":"ASIR","alumnos":317,"importe":1396367.03,"ticketMedio":4404.94},{"curso":"SEGUNDO","familia":"Matr\u00edcula","alumnos":287,"importe":1476912.51,"ticketMedio":5146.04},{"curso":"SEGUNDO","familia":"ASIR","alumnos":285,"importe":1236639.65,"ticketMedio":4339.09},{"curso":"M\u00c1STER","familia":"Data & Analytics","alumnos":249,"importe":1103089.13,"ticketMedio":4430.08},{"curso":"SEGUNDO","familia":"Marketing","alumnos":225,"importe":1102980.29,"ticketMedio":4902.13},{"curso":"SEGUNDO","familia":"DAW","alumnos":222,"importe":814829.69,"ticketMedio":3670.4},{"curso":"PRIMERO","familia":"DAW","alumnos":214,"importe":839074.05,"ticketMedio":3920.91},{"curso":"SANIDAD","familia":"TCAE/Enfermer\u00eda","alumnos":214,"importe":459377.8,"ticketMedio":2146.63},{"curso":"M\u00c1STER","familia":"Marketing","alumnos":205,"importe":920912.72,"ticketMedio":4492.26},{"curso":"SEGUNDO","familia":"Data & Analytics","alumnos":175,"importe":711298.06,"ticketMedio":4064.56},{"curso":"PRIMERO","familia":"SMR","alumnos":165,"importe":719814.0,"ticketMedio":4362.51},{"curso":"SEGUNDO","familia":"SMR","alumnos":137,"importe":637704.68,"ticketMedio":4654.78},{"curso":"SEGUNDO","familia":"Desarrollo Web","alumnos":125,"importe":460177.81,"ticketMedio":3681.42},{"curso":"PRIMERO","familia":"Matr\u00edcula","alumnos":124,"importe":537092.1,"ticketMedio":4331.39},{"curso":"SANIDAD","familia":"Pr\u00f3tesis Dental","alumnos":103,"importe":549819.08,"ticketMedio":5338.05},{"curso":"SANIDAD","familia":"Laboratorio","alumnos":101,"importe":361747.5,"ticketMedio":3581.66},{"curso":"SANIDAD","familia":"Diet\u00e9tica","alumnos":99,"importe":321871.8,"ticketMedio":3251.23},{"curso":"PRIMERO","familia":"Marketing","alumnos":97,"importe":337428.0,"ticketMedio":3478.64},{"curso":"SANIDAD","familia":"Emergencias","alumnos":86,"importe":344668.5,"ticketMedio":4007.77},{"curso":"SANIDAD","familia":"Farmacia","alumnos":73,"importe":243328.0,"ticketMedio":3333.26},{"curso":"SEGUNDO","familia":"Diet\u00e9tica","alumnos":60,"importe":236267.8,"ticketMedio":3937.8},{"curso":"M\u00c1STER","familia":"Desarrollo Web","alumnos":56,"importe":235996.56,"ticketMedio":4214.22}]};

const COLORS = {
  PRIMERO: "#0ea5e9",
  SEGUNDO: "#8b5cf6",
  "M\u00c1STER": "#f59e0b",
  "MATR\u00cdCULA": "#6b7280",
  SANIDAD: "#10b981",
  NEGOCIO: "#ef4444",
  TECH: "#3b82f6",
  RESERVA: "#d1d5db",
  OTROS: "#a3a3a3",
  "SIN CLASIFICAR": "#e5e5e5",
};

const PIE_COLORS = ["#0ea5e9","#8b5cf6","#f59e0b","#10b981","#6b7280","#ef4444","#3b82f6","#d1d5db","#a3a3a3","#e5e5e5"];

const fmt = (n) => n >= 1000000 ? `${(n/1000000).toFixed(2)}M\u20ac` : n >= 1000 ? `${(n/1000).toFixed(0)}K\u20ac` : `${n.toFixed(0)}\u20ac`;
const fmtN = (n) => n >= 1000 ? `${(n/1000).toFixed(1)}K` : n.toString();
const fmtFull = (n) => new Intl.NumberFormat('es-ES', {style:'currency', currency:'EUR', maximumFractionDigits:0}).format(n);

const KPI = ({label, value, sub, color="#0ea5e9"}) => (
  <div style={{background:"#111", borderRadius:12, padding:"18px 20px", borderLeft:`4px solid ${color}`, minWidth:0}}>
    <div style={{color:"#888", fontSize:11, textTransform:"uppercase", letterSpacing:1, marginBottom:4, fontFamily:"'JetBrains Mono', monospace"}}>{label}</div>
    <div style={{color:"#f0f0f0", fontSize:22, fontWeight:700, fontFamily:"'JetBrains Mono', monospace"}}>{value}</div>
    {sub && <div style={{color:"#666", fontSize:11, marginTop:2}}>{sub}</div>}
  </div>
);

const SectionTitle = ({children, icon}) => (
  <div style={{display:"flex", alignItems:"center", gap:10, marginTop:32, marginBottom:16}}>
    <span style={{fontSize:20}}>{icon}</span>
    <h2 style={{color:"#e0e0e0", fontSize:16, fontWeight:700, margin:0, fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", letterSpacing:1}}>{children}</h2>
    <div style={{flex:1, height:1, background:"#333"}}/>
  </div>
);

const CustomTooltip = ({active, payload, label}) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{background:"#1a1a1a", border:"1px solid #333", borderRadius:8, padding:"10px 14px", fontSize:12, fontFamily:"'JetBrains Mono', monospace"}}>
      <div style={{color:"#aaa", marginBottom:4}}>{label}</div>
      {payload.map((p,i) => (
        <div key={i} style={{color:p.color || "#fff"}}>
          {p.name}: <strong>{typeof p.value === 'number' ? (p.name.toLowerCase().includes('importe') || p.name.toLowerCase().includes('\u20ac') ? fmtFull(p.value) : p.value.toLocaleString('es-ES')) : p.value}</strong>
        </div>
      ))}
    </div>
  );
};

const DetailTable = ({data, columns}) => (
  <div style={{overflowX:"auto", maxHeight:400, overflowY:"auto"}}>
    <table style={{width:"100%", borderCollapse:"collapse", fontSize:12, fontFamily:"'JetBrains Mono', monospace"}}>
      <thead>
        <tr>{columns.map((c,i) => (
          <th key={i} style={{position:"sticky", top:0, background:"#1a1a1a", color:"#888", textAlign:c.align||"left", padding:"8px 12px", borderBottom:"1px solid #333", fontSize:10, textTransform:"uppercase", letterSpacing:1, whiteSpace:"nowrap"}}>{c.label}</th>
        ))}</tr>
      </thead>
      <tbody>{data.map((row, ri) => (
        <tr key={ri} style={{background: ri%2===0?"transparent":"#0a0a0a"}}>
          {columns.map((c,ci) => (
            <td key={ci} style={{padding:"7px 12px", color:ci===0?"#e0e0e0":"#aaa", textAlign:c.align||"left", borderBottom:"1px solid #1a1a1a", whiteSpace:"nowrap"}}>
              {c.format ? c.format(row[c.key]) : row[c.key]}
            </td>
          ))}
        </tr>
      ))}</tbody>
    </table>
  </div>
);

const TABS = ["Vista General", "PRIMERO", "SEGUNDO", "Otras Categor\u00edas", "Comercial", "Evoluci\u00f3n"];

export default function Dashboard() {
  const [tab, setTab] = useState(0);

  const monthlyByCurso = useMemo(() => {
    const months = [...new Set(DATA.mesCurso.map(d => d.mes))].sort();
    return months.map(m => {
      const row = {mes: m.slice(2)};
      DATA.mesCurso.filter(d => d.mes === m).forEach(d => {
        row[d.curso] = d.alumnos;
        row[d.curso+"_imp"] = d.importe;
      });
      return row;
    });
  }, []);

  const relevantMonths = useMemo(() => monthlyByCurso.filter(m => {
    const y = parseInt("20" + m.mes.split("-")[0]);
    return y >= 2025 || (y === 2024 && parseInt(m.mes.split("-")[1]) >= 11);
  }), [monthlyByCurso]);

  return (
    <div style={{background:"#0a0a0a", minHeight:"100vh", color:"#ccc", fontFamily:"'Inter', -apple-system, sans-serif", padding:0}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      `}</style>

      <div style={{background:"linear-gradient(135deg, #0f0f0f 0%, #1a0a2e 50%, #0a1628 100%)", padding:"28px 32px 20px", borderBottom:"1px solid #222"}}>
        <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:4}}>
          <div style={{width:40, height:40, borderRadius:10, background:"linear-gradient(135deg, #8b5cf6, #0ea5e9)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:"#fff"}}>FP</div>
          <div>
            <h1 style={{margin:0, fontSize:22, fontWeight:700, color:"#fff", fontFamily:"'JetBrains Mono', monospace"}}>Dashboard Matr\u00edculas FP</h1>
            <div style={{color:"#666", fontSize:11, fontFamily:"'JetBrains Mono', monospace"}}>ThePower \u00b7 Closed Won \u00b7 {DATA.kpis.totalAlumnos.toLocaleString()} registros \u00b7 Feb 2024 \u2013 Dic 2026</div>
          </div>
        </div>
      </div>

      <div style={{display:"flex", gap:0, borderBottom:"1px solid #222", background:"#0f0f0f", overflowX:"auto", paddingLeft:20}}>
        {TABS.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            background: tab===i ? "#1a1a1a" : "transparent",
            color: tab===i ? "#fff" : "#666",
            border:"none", borderBottom: tab===i ? "2px solid #8b5cf6" : "2px solid transparent",
            padding:"12px 20px", fontSize:12, fontFamily:"'JetBrains Mono', monospace", cursor:"pointer",
            fontWeight: tab===i ? 700 : 400, whiteSpace:"nowrap", transition:"all .2s"
          }}>{t}</button>
        ))}
      </div>

      <div style={{padding:"0 24px 40px", maxWidth:1200, margin:"0 auto"}}>
        {tab === 0 && (<>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:12, marginTop:20}}>
            <KPI label="Total Alumnos" value={DATA.kpis.totalAlumnos.toLocaleString()} color="#8b5cf6"/>
            <KPI label="Importe Total" value={fmt(DATA.kpis.importeTotal)} sub={`Ticket medio: ${fmtFull(DATA.kpis.ticketMedio)}`} color="#0ea5e9"/>
            <KPI label="Precio Venta" value={fmt(DATA.kpis.precioVentaTotal)} sub={`Media: ${fmtFull(DATA.kpis.precioVentaMedio)}`} color="#10b981"/>
            <KPI label="Descuento Total" value={fmt(DATA.kpis.descuentoTotal)} sub={`${(DATA.kpis.descuentoTotal/DATA.kpis.importeTotal*100).toFixed(1)}% sobre importe`} color="#f59e0b"/>
            <KPI label="1\u00ba Curso" value={DATA.porCurso[0].alumnos.toLocaleString()} sub={`${(DATA.porCurso[0].alumnos/DATA.kpis.totalAlumnos*100).toFixed(1)}% del total`} color="#0ea5e9"/>
            <KPI label="2\u00ba Curso" value={DATA.porCurso[1].alumnos.toLocaleString()} sub={`${(DATA.porCurso[1].alumnos/DATA.kpis.totalAlumnos*100).toFixed(1)}% del total`} color="#8b5cf6"/>
          </div>
          <SectionTitle icon="\ud83d\udcca">Distribuci\u00f3n por Categor\u00eda</SectionTitle>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:20}}>
            <div style={{background:"#111", borderRadius:12, padding:20}}>
              <div style={{color:"#888", fontSize:11, marginBottom:12, fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", letterSpacing:1}}>Alumnos por categor\u00eda</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={DATA.porCurso.filter(d => d.alumnos > 10)} layout="vertical" margin={{left:80, right:20}}>
                  <XAxis type="number" tick={{fill:"#666", fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis type="category" dataKey="categoria" tick={{fill:"#aaa", fontSize:11}} axisLine={false} tickLine={false} width={75}/>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Bar dataKey="alumnos" name="Alumnos" radius={[0,4,4,0]}>
                    {DATA.porCurso.filter(d => d.alumnos > 10).map((d,i) => <Cell key={i} fill={COLORS[d.categoria] || "#666"}/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{background:"#111", borderRadius:12, padding:20}}>
              <div style={{color:"#888", fontSize:11, marginBottom:12, fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", letterSpacing:1}}>Importe por categor\u00eda</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={DATA.porCurso.filter(d=>d.alumnos>10)} dataKey="importe" nameKey="categoria" cx="50%" cy="50%" innerRadius={60} outerRadius={110} paddingAngle={2} label={({categoria, percent}) => `${categoria} ${(percent*100).toFixed(0)}%`} labelLine={{stroke:"#444"}} style={{fontSize:10, fontFamily:"'JetBrains Mono', monospace"}}>
                    {DATA.porCurso.filter(d=>d.alumnos>10).map((d,i) => <Cell key={i} fill={COLORS[d.categoria] || PIE_COLORS[i%10]}/>)}
                  </Pie>
                  <Tooltip formatter={(v) => fmtFull(v)}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <SectionTitle icon="\ud83d\udcc8">Evoluci\u00f3n Mensual</SectionTitle>
          <div style={{background:"#111", borderRadius:12, padding:20}}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={relevantMonths} margin={{left:10, right:10}}>
                <CartesianGrid stroke="#222" strokeDasharray="3 3"/>
                <XAxis dataKey="mes" tick={{fill:"#666", fontSize:9}} axisLine={false}/>
                <YAxis tick={{fill:"#666", fontSize:10}} axisLine={false} tickLine={false}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Area type="monotone" dataKey="PRIMERO" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} name="1\u00ba Curso"/>
                <Area type="monotone" dataKey="SEGUNDO" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="2\u00ba Curso"/>
                <Area type="monotone" dataKey="M\u00c1STER" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="M\u00e1ster"/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <SectionTitle icon="\ud83c\udfeb">Top Familias Formativas</SectionTitle>
          <div style={{background:"#111", borderRadius:12, padding:20}}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={DATA.porFamilia.filter(d => d.alumnos >= 30)} layout="vertical" margin={{left:120, right:20}}>
                <XAxis type="number" tick={{fill:"#666", fontSize:10}} axisLine={false} tickLine={false}/>
                <YAxis type="category" dataKey="familia" tick={{fill:"#aaa", fontSize:10}} axisLine={false} tickLine={false} width={115}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Bar dataKey="alumnos" name="Alumnos" fill="#8b5cf6" radius={[0,4,4,0]} barSize={16}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>)}
        {tab >= 1 && <div style={{color:"#888", textAlign:"center", marginTop:40, fontFamily:"'JetBrains Mono', monospace"}}>Ver c\u00f3digo fuente completo en el repositorio</div>}
      </div>
    </div>
  );
}
