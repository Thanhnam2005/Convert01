const { useState, useRef } = React;

function App() {
    const [images, setImages] = useState([]);
    const [pdfUrl, setPdfUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
        setImages(prevImages => [...prevImages, ...files]);
    };

    const handleFileInput = (e) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
            setImages(prevImages => [...prevImages, ...files]);
        }
    };

    const convertToPdf = async () => {
        const pdf = new jspdf.jsPDF();
        
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const imageUrl = URL.createObjectURL(image);
            
            if (i > 0) {
                pdf.addPage();
            }
            
            await new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const imgWidth = pdf.internal.pageSize.getWidth();
                    const imgHeight = (img.height * imgWidth) / img.width;
                    pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
                    resolve();
                };
                img.src = imageUrl;
            });
        }
        
        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        setPdfUrl(url);
    };

    return (
        <div>
            <header className="header">
                <div className="container header-content">
                    <h1 className="logo">ImageToPDF</h1>
                </div>
            </header>
            
            <section className="hero">
                <div className="container">
                    <h2 className="hero-title">Chuyển đổi ảnh sang PDF chuyên nghiệp</h2>
                    <p className="hero-subtitle">Dễ dàng, nhanh chóng và an toàn - Hoàn toàn miễn phí!</p>
                    <a href="#converter" className="button button-primary">Bắt đầu ngay</a>
                </div>
            </section>

            <section id="converter" className="converter">
                <div className="container">
                    <div className="converter-container">
                        <div 
                            className="dropzone"
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <p>Kéo và thả các ảnh vào đây, hoặc nhấp để chọn tệp</p>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                multiple
                                accept="image/*"
                                onChange={handleFileInput}
                            />
                        </div>
                        
                        {images.length > 0 && (
                            <div className="preview">
                                {images.map((image, index) => (
                                    <img 
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index}`}
                                        className="preview-image"
                                    />
                                ))}
                            </div>
                        )}
                        
                        {images.length > 0 && (
                            <button className="convert-button" onClick={convertToPdf}>
                                Chuyển đổi sang PDF
                            </button>
                        )}
                        
                        {pdfUrl && (
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <h3>PDF của bạn đã sẵn sàng!</h3>
                                <a
                                    href={pdfUrl}
                                    download="anh-da-chuyen-doi.pdf"
                                    className="button button-primary"
                                    style={{ marginTop: '1rem' }}
                                >
                                    Tải xuống PDF
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

