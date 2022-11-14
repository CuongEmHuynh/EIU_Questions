import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CateQuestion } from '../models/cate-question';

@Injectable({
  providedIn: 'root'
})


export class CateQuestionService {
  cateQuestion: Array<CateQuestion> = [
    {
      id: 1,
      name: "Realishtic",
      totalScore: 0,
      contentResult: `Bạn thuộc Nhóm R (Realistic): Nhóm kỹ thuật – Người thực hiện	
      Người thuộc nhóm tính cách này thích hành động hơn là suy nghĩ hay nghiên cứu các lý thuyết trừu tượng. Giỏi giải quyết những việc đòi hỏi sự khóe léo của đôi bàn tay, phối hợp giữa các kỹ năng và thao tác vận động. Các phương thức giải quyết công việc thường đơn giản, dễ áp dụng và đạt được hiệu quả cụ thể.	
      Họ có xu hướng quan tâm đến cơ khí, xây dựng, thích làm việc với các công cụ, máy móc, thiết bị. Thích môi trường làm việc gắn với thiên nhiên, xa bàn giấy.	
      Ngành nghề phù hợp	
      - Cơ khí & Xây dựng: Kỹ sư cơ khí, chế tạo máy, luyện kim, điện lạnh, xây dựng, giao thông, thủy lợi, trắc địa, mỏ, địa chất, dầu khí, vận tải, hàng hải	
      - Điện, điện tử: Kỹ sư điện, điện tử, phần cứng máy tính, viễn thông, tự động hóa	
      - Thiên nhiên & Nông nghiệp: Kỹ sư nông nghiệp, lâm nghiệp, thủy sản, bác sỹ thú y	
      - Quân sự, thể thao và các dịch vụ bảo vệ: Kỹ thuật quân sự, an ninh, vận động viên, huấn luyện viên, giám sát phòng cháy, chữa cháy, giám sát chất lượng, an toàn lao động	
      - Các nghề thợ: Thợ sơn, thợ xây dựng, đúc, hàn, mộc, sửa chữa điện, điện tử, lái xe.	
      - Các ngành nghề liên quan khác: Kỹ thuật trong y học, vật lý trị liệu, kiến trúc sư, khí tượng thủy văn, hải dương học, dược, đầu bếp.`
    },
    {
      id: 2,
      name: "Ngành Quản Trị Kinh Doanh",
      totalScore: 0,
      contentResult: `Bạn thuộc Nhóm I (Investigative): Nhóm nghiên cứu – Người suy nghĩ
      Những người thuộc nhóm tính cách này thường thích suy nghĩ, quan sát hơn là hành động. Họ thông minh và có khả năng giải quyết các vấn đề khoa học. Thích và có khả năng tìm tòi, nghiên cứu những quy luật trong tự nhiên và đời sống xã hội. Độc lập sáng tạo, có tư duy phản biện, lật lại vấn đề. Thích trầm tư suy nghĩ hơn là tham gia các công tác xã hội sôi nổi.
      Họ tự tổ chức công việc của mình rất tốt, thường lập kế hoạch và thực hiện theo đúng kế hoạch đã đề ra, cũng bởi vì họ có tính kiên trì, tỉ mỉ và ngăn nắp.
      Ngành nghề phù hợp
      - Nghiên cứu khoa học: Nhà toán học, nhà vật lý học, nhà thiên văn học, nhà hóa học, nhà sinh vật học, sinh thái học (động vật, thực vật, thổ nhưỡng, nông học, lâm học, bệnh học thủy sản, thú y, bệnh học cây trồng)
      - Kỹ thuật công nghệ: Công nghệ thông tin, công nghệ sinh học, khoa học môi trường , khí tượng thủy văn, hải dương học, nhà nghiên cứu địa lý, địa chất, nghiên cứu xây dựng, nghiên cứu vật liệu mới, chuyên gia dinh dưỡng, kỹ sư hóa thực phẩm (công nghệ thực phẩm)
      - Y khoa: Bác sỹ (nhi khoa, đa khoa, nha khoa, phẫu thuật / chỉnh hình, tâm thần), dược sỹ, y học cổ truyền
      - Các ngành nghề liên quan: Khoa học xã hội (nhà tâm lý học, nhà ngôn ngữ học, nhà xã hội học, đô thị học, nhà sử học, khảo cổ học, nhà nhân học, nhà văn hóa, Việt Nam học, quốc tế học, chính trị học, triết học), luật sư, an ninh điều tra, giám định pháp y, nhà kinh tế học, phân tích tài chính, nghiên cứu thị trường, thống kê dự báo, nghiên cứu và quy hoạch đô thị (kiến trúc sư)`
    },
    // {
    //   id: 3,
    //   name: "Ngành Kỹ Thuật",
    //   totalScore: 0
    // },
    // {
    //   id: 4,
    //   name: "Ngành Điều Dưỡng",
    //   totalScore: 0
    // },
  ];

  public _serviceCate = inject(HttpClient)
  constructor() { }


  // getCateQuestion() {
  //   return this.cateQuestion;
  // }

  getCateQuestion() :Observable<CateQuestion[]>{
    const apiUrl = environment.apiUrl;
    return this._serviceCate.get<CateQuestion[]>(`${apiUrl}CateQuestion/GetAll`)
  }
}


