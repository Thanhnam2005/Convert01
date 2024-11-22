'use client'

import { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons'
import { jsPDF } from 'jspdf'

const StyledConverter = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.body};
`

const ConverterContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const DropZone = styled.div`
  border: 2px dashed ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`

const ImagePreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`

const ConvertButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`

const DownloadSection = styled(motion.div)`
  text-align: center;
  margin-top: 2rem;
`

const DownloadButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`

const Converter: React.FC = () => {
  const [images, setImages] = useState<File[]>([])
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'))
    setImages(prevImages => [...prevImages, ...files])
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'))
      setImages(prevImages => [...prevImages, ...files])
    }
  }

  const convertToPdf = async () => {
    const pdf = new jsPDF()
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      const imageUrl = URL.createObjectURL(image)
      
      if (i > 0) {
        pdf.addPage()
      }
      
      await new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          const imgWidth = pdf.internal.pageSize.getWidth()
          const imgHeight = (img.height * imgWidth) / img.width
          pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight)
          resolve()
        }
        img.src = imageUrl
      })
    }
    
    const pdfBlob = pdf.output('blob')
    const url = URL.createObjectURL(pdfBlob)
    setPdfUrl(url)
  }

  return (
    <StyledConverter id="converter">
      <div className="container">
        <h2>Chuyển đổi ảnh của bạn</h2>
        <ConverterContainer>
          <DropZone
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
          >
            <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" />
            <p>Kéo và thả các ảnh vào đây, hoặc nhấp để chọn tệp</p>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              multiple
              accept="image/*"
              onChange={handleFileInput}
            />
          </DropZone>
          {images.length > 0 && (
            <ImagePreview>
              {images.map((image, index) => (
                <PreviewImage key={index} src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
              ))}
            </ImagePreview>
          )}
          {images.length > 0 && (
            <ConvertButton
              onClick={convertToPdf}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faFilePdf} /> Chuyển đổi sang PDF
            </ConvertButton>
          )}
          <AnimatePresence>
            {pdfUrl && (
              <DownloadSection
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3>PDF của bạn đã sẵn sàng!</h3>
                <DownloadButton
                  href={pdfUrl}
                  download="anh-da-chuyen-doi.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faDownload} /> Tải xuống PDF
                </DownloadButton>
              </DownloadSection>
            )}
          </AnimatePresence>
        </ConverterContainer>
      </div>
    </StyledConverter>
  )
}

export default Converter

