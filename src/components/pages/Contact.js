import { useEffect, useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'
import styles from './Contact.module.css'

const eventMenu = [
    {
        key: 'Casamento',
        title: 'Casamento',
        items: [
            'Entrada: tábuas de frios, canapés e saladas finas',
            'Prato principal: risoto, frango ao molho, carne assada e massas',
            'Acompanhamentos: arroz branco, batatas gratinadas e legumes',
            'Sobremesa: mini tortas e doces gourmets',
        ],
    },
    {
        key: 'Aniversário',
        title: 'Aniversário',
        items: [
            'Entrada: coxinhas, quibes e mini empadas',
            'Prato principal: frango grelhado, strogonoff e massas',
            'Acompanhamentos: arroz, batata sauté e salada',
            'Sobremesa: bolo decorado e docinhos',
        ],
    },
    {
        key: 'Churrasco',
        title: 'Churrasco',
        items: [
            'Carnes variadas: picanha, costela e frango',
            'Guarnições: farofa, maionese e vinagrete',
            'Acompanhamentos: pão de alho e saladas frescas',
            'Bebidas: refrigerante, suco e água',
        ],
    },
    {
        key: 'Confraternização',
        title: 'Confraternização',
        items: [
            'Entrada: bruschettas, canapés e pastéis',
            'Prato principal: filé, massas e risoto',
            'Acompanhamentos: arroz especial e legumes assados',
            'Sobremesa: sobremesas em porção e frutas',
        ],
    },
]

const today = new Date()
today.setHours(0, 0, 0, 0)
const minDateString = today.toISOString().slice(0, 10)

function Contact() {
    const [selectedEvent, setSelectedEvent] = useState('Casamento')
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        event: 'Casamento',
        guests: '',
        alcohol: 'Sem Bebida Alcoólica',
        date: '',
        startTime: '18:00',
        endTime: '22:00',
        city: 'Cariacica',
        street: '',
        number: '',
        cep: '',
        neighborhood: '',
    })
    const [errors, setErrors] = useState({})
    const [autoEndTime, setAutoEndTime] = useState(true)

    useEffect(() => {
        setForm((prev) => ({ ...prev, event: selectedEvent }))
    }, [selectedEvent])

    useEffect(() => {
        if (!autoEndTime || !form.startTime) {
            return
        }
        const [hour, minute] = form.startTime.split(':').map(Number)
        if (Number.isInteger(hour) && Number.isInteger(minute)) {
            const endHour = (hour + 4) % 24
            setForm((prev) => ({
                ...prev,
                endTime: `${String(endHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
            }))
        }
    }, [form.startTime, autoEndTime])

    const selectedDate = form.date ? new Date(form.date) : null
    const isDateSoon = selectedDate
        ? (selectedDate - today) / (1000 * 60 * 60 * 24) < 14
        : false
    const guestWarning = form.guests && Number(form.guests) > 0 && Number(form.guests) < 40

    function validate() {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = 'O nome é obrigatório.'
        if (!form.email.trim()) {
            newErrors.email = 'O e-mail é obrigatório.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'O e-mail não é válido.'
        }
        if (!form.phone.trim()) newErrors.phone = 'O telefone é obrigatório.'
        if (!form.guests.trim()) {
            newErrors.guests = 'Total de convidados é obrigatório.'
        } else if (Number(form.guests) < 1) {
            newErrors.guests = 'Informe um número válido de convidados.'
        }
        if (!form.date) newErrors.date = 'A data do evento é obrigatória.'
        if (!form.startTime) newErrors.startTime = 'O horário de início é obrigatório.'
        if (!form.endTime) newErrors.endTime = 'O horário final é obrigatório.'
        if (!form.city) newErrors.city = 'A cidade é obrigatória.'
        return newErrors
    }

    function handleChange(event) {
        const { name, value } = event.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (name === 'endTime') {
            setAutoEndTime(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const validation = validate()
        setErrors(validation)
        if (Object.keys(validation).length === 0) {
            console.log('Orçamento enviado', form)
            alert('Orçamento preparado com sucesso. Em breve entraremos em contato.')
            // TODO: enviar dados para o banco de dados ou integrar API
        }
    }

    return (
        <section className={styles.contact_container}>
            <h1>Faça já seu <span>ORÇAMENTO!</span></h1>
            <section className={styles.information}>
                <fieldset>
                    <legend>Contato</legend>
                    <div className={styles.contactsGroup}>
                        <div>
                            <h3><i>Alexsander Shineyder</i></h3>
                            <p>Número: <strong>(27) 98804-1610</strong></p>
                            <p>E-mail: <strong>alexsandershineyder2014@hotmail.com</strong></p>
                        </div>
                        <div>
                            <h3><i>Nilson Ramos</i></h3>
                            <p>Número: <strong>(27) 98882-1570</strong></p>
                        </div>
                    </div>
                    <ul className={styles.fornecedor}>
                        <li><FaEnvelope /></li>
                        <li><FaPhone /></li>
                        <li><FaWhatsapp /></li>
                    </ul>
                </fieldset>
            </section>
            <section className={styles.budget_grid}>
                <aside className={styles.menu_column}>
                    <h2>Menu</h2>
                    <div className={styles.menu_cards}>
                        {eventMenu.map((eventInfo) => (
                            <article
                                key={eventInfo.key}
                                className={`${styles.card} ${selectedEvent === eventInfo.key ? styles.selectedCard : ''}`}
                                onClick={() => setSelectedEvent(eventInfo.key)}
                            >
                                <h3>{eventInfo.title}</h3>
                                <ul>
                                    {eventInfo.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                    <p className={styles.menuInfo}>
                        Selecione um tipo de evento para mostrar o cardápio correspondente. O evento escolhido será transferido automaticamente para o orçamento.
                    </p>
                </aside>
                <aside className={styles.budget_column}>
                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        <fieldset>
                            <legend>Identificação</legend>
                            <label htmlFor="name">
                                Nome <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nome completo"
                            />
                            {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}

                            <label htmlFor="email">
                                E-mail <span>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="email@dominio.com"
                            />
                            {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}

                            <label htmlFor="phone">
                                Telefone <span>*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="(27) 99999-9999"
                            />
                            {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
                        </fieldset>
                        <fieldset>
                            <legend>Evento</legend>
                            <label htmlFor="event">Evento</label>
                            <input
                                type="text"
                                id="event"
                                name="event"
                                value={form.event}
                                readOnly
                            />

                            <label htmlFor="guests">
                                Total Convidados <span>*</span>
                            </label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                min="1"
                                value={form.guests}
                                onChange={handleChange}
                                placeholder="Número de convidados"
                            />
                            {errors.guests && <p className={styles.errorMsg}>{errors.guests}</p>}
                            {guestWarning && (
                                <p className={styles.warningMsg}>
                                    Número de Convidados abaixo do esperado
                                </p>
                            )}

                            <div className={styles.radioGroup}>
                                <p>Bebida Alcoólica</p>
                                <label>
                                    <input
                                        type="radio"
                                        name="alcohol"
                                        value="Com Bebida Alcoólica"
                                        checked={form.alcohol === 'Com Bebida Alcoólica'}
                                        onChange={handleChange}
                                    />
                                    Com Bebidas Alcoólicas
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="alcohol"
                                        value="Sem Bebida Alcoólica"
                                        checked={form.alcohol === 'Sem Bebida Alcoólica'}
                                        onChange={handleChange}
                                    />
                                    Sem Bebidas Alcoólicas
                                </label>
                            </div>

                            <label htmlFor="date">
                                Data do Evento <span>*</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                min={minDateString}
                                value={form.date}
                                onChange={handleChange}
                            />
                            {errors.date && <p className={styles.errorMsg}>{errors.date}</p>}
                            {isDateSoon && form.date && (
                                <p className={styles.warningMsg}>
                                    A data {form.date} sugerida para este Evento {form.event} infelizmente está muito em cima do cronograma, está certa que é esta data?
                                </p>
                            )}

                            <div className={styles.timeRow}>
                                <div>
                                    <label htmlFor="startTime">
                                        Horário de Início <span>*</span>
                                    </label>
                                    <input
                                        type="time"
                                        id="startTime"
                                        name="startTime"
                                        value={form.startTime}
                                        onChange={handleChange}
                                    />
                                    {errors.startTime && <p className={styles.errorMsg}>{errors.startTime}</p>}
                                </div>
                                <div>
                                    <label htmlFor="endTime">
                                        Horário Final <span>*</span>
                                    </label>
                                    <input
                                        type="time"
                                        id="endTime"
                                        name="endTime"
                                        value={form.endTime}
                                        onChange={handleChange}
                                    />
                                    {errors.endTime && <p className={styles.errorMsg}>{errors.endTime}</p>}
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Endereço</legend>
                            <label htmlFor="city">
                                Cidade <span>*</span>
                            </label>
                            <select
                                name="city"
                                id="city"
                                value={form.city}
                                onChange={handleChange}
                            >
                                <option value="Cariacica">Cariacica</option>
                                <option value="Serra">Serra</option>
                                <option value="Viana">Viana</option>
                                <option value="Vila Velha">Vila Velha</option>
                                <option value="Vitória">Vitória</option>
                            </select>
                            {errors.city && <p className={styles.errorMsg}>{errors.city}</p>}

                            <label htmlFor="street">Rua</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                                placeholder="Rua"
                            />

                            <label htmlFor="number">Número</label>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={form.number}
                                onChange={handleChange}
                                placeholder="Número"
                            />

                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                value={form.cep}
                                onChange={handleChange}
                                placeholder="CEP"
                            />

                            <label htmlFor="neighborhood">Bairro</label>
                            <input
                                type="text"
                                id="neighborhood"
                                name="neighborhood"
                                value={form.neighborhood}
                                onChange={handleChange}
                                placeholder="Bairro"
                            />
                        </fieldset>
                        <button type="submit" className={styles.submitButton}>
                            Enviar Orçamento
                        </button>
                    </form>
                </aside>
            </section>
        </section>
    )
}

export default Contact