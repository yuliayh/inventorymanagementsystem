// Data items
const items = [
    {
      no: 1,
      id: 10,
      name: 'Mouse 3',
      category: 'Mouse',
      location: 'Room 1',
      quantity: 100,
      added: '01-01-2024',
      action: ''
    },
    {
        no: 2,
        id: 9,
        name: 'Keyboard 3',
        category: 'Keyboard',
        location: 'Room 1',
        quantity: 100,
        added: '01-01-2024',
        action: ''
      },
      {
        no: 3,
        id: 8,
        name: 'Monitor 3',
        category: 'Monitor',
        location: 'Room 3',
        quantity: 100,
        added: '01-01-2024',
        action: ''
      },
      {
        no: 4,
        id: 7,
        name: 'Mouse 2',
        category: 'Mouse',
        location: 'Room 2',
        quantity: 100,
        added: '01-01-2024',
        action: ''
      },
      {
        no: 5,
        id: 6,
        name: 'Mouse 3',
        category: 'Mouse',
        location: 'Room 3',
        quantity: 100,
        added: '19-02-2018',
        action: ''
      },
      {
        no: 6,
        id: 5,
        name: 'Mouse 3',
        category: 'Mouse',
        location: 'Room 3',
        quantity: 100,
        added: '19-02-2018',
        action: ''
      },
      {
        no: 7,
        id: 6,
        name: 'Mouse 3',
        category: 'Mouse',
        location: 'Room 3',
        quantity: 100,
        added: '19-02-2018',
        action: ''
      },
      {
        no: 8,
        id: 7,
        name: 'Mouse 3',
        category: 'Mouse',
        location: 'Room 3',
        quantity: 100,
        added: '19-02-2018',
        action: ''
      }, 
      {
        no: 9,
        id:9,
        name: 'Printer 1',
        category: 'Printer',
        location: 'Room 5',
        quantity: 150,
        added: '20-02-2024',
        action: ''
      },
      {
        no: 10,
        id: 10,
        name: 'Printer 2',
        category: 'Printer',
        location: 'Room 3',
        quantity: 100,
        added: '20-02-2024',
        action: ''
      }                                                                                                                                                                                                                                                                                                                                                                                                                                
    // ... Tambahkan data items lainnya disini
  ];
  
  // Fungsi untuk menampilkan data items ke tabel
  function displayItems() {
    const tbody = document.querySelector('#itemsTable tbody');
    tbody.innerHTML = '';
  
    items.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.no}</td>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.location}</td>
        <td>${item.quantity}</td>
        <td>${item.added}</td>
        <td>${item.action}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Tampilkan data items saat halaman dimuat
  window.onload = () => {
    displayItems();
  };