import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledHero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: #fff;
`

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: #fff;
  color: ${({ theme }) => theme.primary};
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroTitle>Chuyển đổi ảnh sang PDF chuyên nghiệp</HeroTitle>
          <HeroSubtitle>Dễ dàng, nhanh chóng và an toàn - Hoàn toàn miễn phí!</HeroSubtitle>
          <CTAButton
            href="#converter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bắt đầu ngay
          </CTAButton>
        </motion.div>
      </div>
    </StyledHero>
  )
}

export default Hero

