import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledTestimonials = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const TestimonialItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
`

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: '"Công cụ tuyệt vời, giúp tôi tiết kiệm rất nhiều thời gian!"',
      author: 'Nguyễn Văn A',
    },
    {
      text: '"Giao diện đẹp, dễ sử dụng. Tôi rất hài lòng với kết quả."',
      author: 'Trần Thị B',
    },
    {
      text: '"Chất lượng PDF xuất ra rất tốt. Sẽ giới thiệu cho bạn bè."',
      author: 'Lê Văn C',
    },
  ]

  return (
    <StyledTestimonials>
      <div className="container">
        <h2>Khách hàng nói gì về chúng tôi</h2>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
            </TestimonialItem>
          ))}
        </TestimonialGrid>
      </div>
    </StyledTestimonials>
  )
}

export default Testimonials

