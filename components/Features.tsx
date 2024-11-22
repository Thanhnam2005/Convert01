import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faLock, faMagic, faDesktop } from '@fortawesome/free-solid-svg-icons'

const StyledFeatures = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const FeatureItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const Features: React.FC = () => {
  const features = [
    { icon: faRocket, title: 'Nhanh chóng', description: 'Chuyển đổi trong vài giây' },
    { icon: faLock, title: 'An toàn', description: 'Bảo mật dữ liệu của bạn' },
    { icon: faMagic, title: 'Chất lượng cao', description: 'Giữ nguyên chất lượng ảnh' },
    { icon: faDesktop, title: 'Đa nền tảng', description: 'Sử dụng trên mọi thiết bị' },
  ]

  return (
    <StyledFeatures>
      <div className="container">
        <h2>Tính năng nổi bật</h2>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon icon={feature.icon} />
              <FeatureTitle>{feature.title}</FeatureTitle>
              <p>{feature.description}</p>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </div>
    </StyledFeatures>
  )
}

export default Features

