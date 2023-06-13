import DataTable from 'datatables.net-dt';
const tabla = new DataTable('#datatablesSimple', {lengthMenu: [[5, 10, 25, 50], [5, 10, 25, 50]], pageLength: 5});

export default tabla;