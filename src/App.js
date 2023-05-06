import React, { useState } from 'react'
import './App.css'
import { BiMessageX } from 'react-icons/bi'
import { BsCloudCheck } from 'react-icons/bs'
import Logo from './assets/logo.png'
import unn from './assets/draft_responses_onboarding.png'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

const App = () => {
  const [cloud, setCloud] = useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    number: "+998",
    text: "",
    email: "",
    time: ""
  });

  const sendMsgToBot = async () => {
    let myText = `<b>O'quvchi ro'yxatdan o'tdi</b>%0A%0A`;
    myText += `Ismi: <h3>${formData.fullname}</h3>%0A`;
    myText += `Tel: <b>${formData.number}</b>%0A`;
    myText += `Email: <b>${formData.email}</b>%0A`;
    myText += `time: <b>${formData.time}</b>%0A`;

    let aaa = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.fullname}%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Email: ${formData.email}%0A  Savol va takliflar: ${formData.text}`
    console.log(aaa);
    let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";
    let chatId = "1986279045";

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${aaa}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  };

  const Clear = () => {

  }
  // console.log(myText);



  return (
    <form className='Container'>
      <div className="box">
        <div className="box_text">
          <h1 className='title'>
            Algoritm Ta'lim markazi ustozlari tomonidan katta ochiq dars!</h1>
          <p className='info_text'>⚡️ Zamonaviy kasblardan birini «Algoritm Ta'lim»da o'rganish istagida bo'lgan yigit-qizlar uchun markaz ustozlari tomonidan katta ochiq darslar bo'lib o'tadi.
            <br />
            <br />
            Ochiq darslarda:
            <br />
            <br />

            • Marketing yo'nalishidan SMM Pro kursi ustozi — Jahongir Mamatqodirov;<br />
            • Grafik dizayn kursi ustozi — Jahongir G'ulomov;<br />
            • Dasturlash kursi ustozi — Alisher Kasimovlar tomonidan sohalar kimlar uchun va «Algoritm Ta'lim»dagi shu yo'nalishdagi kurslar bo'yicha batafsil ma'lumot olishingiz mumkin.<br /><br />

            Shuningdek shu kuni, markaz rahbari Temurbek Adhamov tomonidan markazdagi qulayliklar, kelgusida o'quvchilar uchun taklif etilayotgan yangiliklar haqida bilib olsangiz bo'ladi.<br /><br />

            📅 Qachon: 5-may, juma, soat 09:30 va 14:30<br />
            🆓 Qatnashish: bepul<br />
            🙌 Kim uchun: barcha uchun<br />
            📍Qayerda: «Algoritm Ta'lim», 9.Navoiy; Namangan sh. Shirin dunyo yonida<br /><br />

            O'zingiz uchun qulay bo'lgan vaqtlarning birida ochiq darslarga tashrif buyurishingiz mumkin. 😉
          </p>
        </div>

        <div className="gmail_box">
          <div
            className="form_item"

          >
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className='borderNone'
              placeholder='@gmail.com'
              required
              minLength={4}
              style={{
                borderBottom: formData.email.length >= 4 && "2px solid green",
              }}
            />

            {formData.email.length >= 4 ? (
              <AiOutlineCheckCircle style={{ color: "green" }} />
            ) : (
              // <AiOutlineCloseCircle style={{ color: "red" }} />
              ""
            )}


          </div>


          <p><BiMessageX /> Совместный доступ отсутствует</p>
          <button onClick={() => setCloud(true)} className='info'><BsCloudCheck /></button>
        </div>

        <p className='error'>*Обязательный вопрос</p>

      </div>
      <div className="box none">
        <p>Ism-familiyangiz <p className='red'>*</p> </p>
        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            className='name'
            placeholder='Мой ответ'
            required
            minLength={4}
            style={{
              borderBottom: formData.fullname.length >= 4 && "2px solid green",
            }}
          />

          {formData.fullname.length >= 4 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}


        </div>
      </div>
      {/* <div className="box none">
        <p>Qaysi vaqtda tashrif buyurmoqchisiz? <p className='red'>*</p> </p>
        <ul className='time'>
          <li><input
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            } type="radio" name='r' value="09:30" /></li>
          <li>09:30</li>
        </ul>
        <ul className='time'>
          <li><input
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            } type="radio" name='r' value="14:30" /></li>
          <li>14:30</li>
        </ul>

      </div> */}
      <div className="box none"
      >
        <p>Telefon raqamingiz <p className='red'>*</p> </p>

        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
            className='name'
            placeholder='Мой ответ'
            required
            minLength={4}
            style={{
              borderBottom: formData.number.length >= 13 && "2px solid green",
            }}
          />

          {formData.number.length >= 13 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}


        </div>

      </div>
      <div className="box none">
        <p>Savol va takliflar uchun </p>
        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.text}
            onChange={(e) =>
              setFormData({ ...formData, text: e.target.value })
            }
            className='rewiew'
            placeholder='Мой ответ'
            required
            minLength={5}
            style={{
              borderBottom: formData.text.length >= 3 && "2px solid green",
            }}
          />
          {formData.text.length >= 3 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}
        </div>
      </div>

      <div className="submit">
        {/*  */}
        <button onClick={() => sendMsgToBot()} className='Otp'>Отправить</button>
        <button onClick={() => Clear()} className='Ochi'>Очистить форму</button>
        {/* <input type="reset" value='Reset' /> */}
      </div>

      <div className="logo">
        <div className="image"><img src={Logo} alt="" /></div>
        <h1>Algoritm Talim</h1>
      </div>



      <div className={`cloud ${cloud ? 'cloudShow' : ""}`}>
        <img src={unn} alt="" />
        <h2>Автосохранение данных</h2>
        <p>Ваши ответы автоматически сохраняются на срок до 30 дней, и вы можете продолжить заполнять формы на других устройствах, где выполнен вход в тот же аккаунт.</p>

        <button onClick={() => setCloud(false)} className='back'>OK</button>
      </div>
      {cloud ? <div onClick={() => setCloud(false)} className="displayNone"></div> : ''}

    </form>

  )
}

export default App

