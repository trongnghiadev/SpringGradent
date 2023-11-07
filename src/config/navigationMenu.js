export const navigation = {
    categories: [
      {
        id: 'hoatuoi',
        name: 'HOA TƯƠI',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20H%E1%BB%99p/03288-600x600.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20H%E1%BB%99p/05082022/DSCF3052-600x600.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'hoacuoi',
            name: 'HOA CƯỚI',
            items: [
              { name: 'Hoa bán chạy', id:"hoabanchay", href: `{hoatuoi/hoacuoi/hoabanchay}` },
              { name: 'Hoa cầm tay', id:"hoacamtay", href: `{hoatuoi/hoacuoi/hoacamtay}` },
              { name: 'Hoa trang trí', id: 'hoatrangtri', href: `{hoatuoi/hoacuoi/hoatrangtri}` },
              { name: 'Hoa bàn', id: 'hoaban', href: `{hoatuoi/hoacuoi/hoaban}` },
            ],
          },
          {
            id: 'hoachucmung',
            name: 'HOA CHÚC MỪNG',  
            items: [
              { name: 'Hoa sinh nhật', id: 'hoasinhnhat', href: `{hoatuoi/hoachucmung/hoasinhnhat}` },
              { name: 'Hoa khai trương', id: 'hoakhaitruong', href: `{hoatuoi/hoachucmung/hoakhaitruong}` },
              { name: 'Hoa tốt nghiệp', id: 'hoatotnghiep', href: `{hoatuoi/hoachucmung/hoatotnghiep}` },
            ],
          },
          {
            id: 'hoatinhyeu',
            name: 'HOA TÌNH YÊU',
            items: [
              { name: 'Hoa cầu hôn', id: 'hoacauhon', href: `{hoatuoi/hoatinhyeu/hoacauhon}` },
              { name: 'Hoa kỷ niệm', id: 'hoakyniem', href: `{hoatuoi/hoatinhyeu/hoakyniem}` },
            ],
          },
        ],
      },
      {
        id: 'caycanh',
        name: 'CÂY CẢNH',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tinygarden.com.vn/media/1076/cay-canh-xanh-trong-nha.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://toplist.vn/images/800px/tre-canh-116977.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'cayngoaitroi',
            name: 'CÂY NGOÀI TRỜI',
            items: [
              { name: 'Cây sân vườn', id: 'caysanvuon', href: `{caycanh/cayngoaitroi/caysanvuon}` },
              { name: 'Cây công trình', id: 'caycongtrinh', href: `{caycanh/cayngoaitroi/caycongtrinh}` },
              { name: 'Cây lọc không khí', id: 'caylockhongkhi', href: `{caycanh/cayngoaitroi/caylockhongkhi}` },           
            ],
          },
          {
            id: 'caytrongnha',
            name: 'CÂY TRONG NHÀ',
            items: [
              { name: 'Cây văn phòng', id: 'cayvanphong', href: `{caycanh/caytrongnha/cayvanphong}` },
              { name: 'Cây để bàn trà', id: 'caydebantra', href: `{caycanh/caytrongnha/caydebantra}` },
              { name: 'Cây leo tường', id: 'cayleotuong', href: `{caycanh/caytrongnha/cayleotuong}` }, 
            ],
          },
        ]  ,
      },
    ],
    pages: [
      { name: 'GIỚI THIỆU', id: '/' },
      { name: 'LIÊN HỆ', id: '/' },
    ],
  }