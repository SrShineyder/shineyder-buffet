import { useEffect, useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'
import styles from './Contact.module.css'

const eventData = [
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
    const [fieldErrors, setFieldErrors] = useState({})
    const [validFields, setValidFields] = useState({})
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
    const [autoEndTime, setAutoEndTime] = useState(true)

    useEffect(() => {
        setForm((prev) => ({ ...prev, event: selectedEvent }))
    }, [selectedEvent])

    useEffect(() => {
        if (!autoEndTime || !form.startTime) return
        const [hour, minute] = form.startTime.split(':').map(Number)
        if (Number.isInteger(hour) && Number.isInteger(minute)) {
            const endHour = (hour + 4) % 24
            setForm((prev) => ({
                ...prev,
                endTime: `${String(endHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
            }))
        }
    }, [form.startTime, autoEndTime])

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '').slice(0, 11)
        if (digits.length === 0) return ''
        if (digits.length <= 2) return `(${digits}`
        if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    }

    const formatCEP = (value) => {
        const digits = value.replace(/\D/g, '').slice(0, 8)
        if (digits.length === 0) return ''
        if (digits.length <= 5) return digits
        return `${digits.slice(0, 5)}-${digits.slice(5)}`
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@(gmail|outlook|hotmail|yahoo|icloud|mail|aol)\.[a-z]+$/i
        return regex.test(email)
    }

    const validateField = (name, value) => {
        let isValid = false
        let error = 'Este campo não foi preenchido corretamente'

        switch (name) {
            case 'name':
                isValid = value.trim().length > 0
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'phone':
                const phoneDigits = value.replace(/\D/g, '')
                isValid = phoneDigits.length === 11
                break
            case 'guests':
                isValid = value && Number(value) >= 1
                break
            case 'date':
                const selectedDate = new Date(value)
                selectedDate.setHours(0, 0, 0, 0)
                isValid = selectedDate >= today
                if (!isValid && value) error = 'Opção de Data inválida'
                break
            case 'startTime':
                isValid = value.length > 0
                break
            case 'endTime':
                isValid = value.length > 0
                break
            case 'city':
                isValid = value.length > 0
                break
            case 'cep':
                if (!value) return { isValid: true, error: '' }
                const cepDigits = value.replace(/\D/g, '')
                isValid = cepDigits.length === 8
                break
            default:
                isValid = true
        }

        return { isValid, error }
    }

    function handleChange(event) {
        const { name, value } = event.target
        let finalValue = value

        if (name === 'phone') {
            finalValue = formatPhone(value)
        } else if (name === 'cep') {
            finalValue = formatCEP(value)
        }

        setForm((prev) => ({ ...prev, [name]: finalValue }))

        const { isValid, error } = validateField(name, finalValue)
        if (isValid) {
            setValidFields((prev) => ({ ...prev, [name]: true }))
            setFieldErrors((prev) => ({ ...prev, [name]: '' }))
        } else {
            setValidFields((prev) => ({ ...prev, [name]: false }))
            setFieldErrors((prev) => ({ ...prev, [name]: error }))
        }

        if (name === 'endTime') {
            setAutoEndTime(false)
        }
    }

    function handleBlur(event) {
        const { name, value } = event.target
        if (!value.trim()) return

        const { isValid, error } = validateField(name, value)
        if (!isValid) {
            setValidFields((prev) => ({ ...prev, [name]: false }))
            setFieldErrors((prev) => ({ ...prev, [name]: error }))
        }
    }

    function handleEventTypeChange(event) {
        const value = event.target.value
        setSelectedEvent(value)
        setForm((prev) => ({ ...prev, event: value }))
        setValidFields((prev) => ({ ...prev, event: true }))
        setFieldErrors((prev) => ({ ...prev, event: '' }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const requiredFields = [
            'name',
            'email',
            'phone',
            'guests',
            'date',
            'startTime',
            'endTime',
            'city',
        ]
        let hasErrors = false

        requiredFields.forEach((field) => {
            const { isValid, error } = validateField(field, form[field])
            if (!isValid) {
                setFieldErrors((prev) => ({ ...prev, [field]: error }))
                setValidFields((prev) => ({ ...prev, [field]: false }))
                hasErrors = true
            }
        })

        if (!hasErrors) {
            console.log('Orçamento enviado', form)
            alert('Orçamento preparado com sucesso. Em breve entraremos em contato.')
        }
    }

    const selectedEventData = eventData.find((e) => e.key === selectedEvent)
    const guestWarning = form.guests && Number(form.guests) > 0 && Number(form.guests) < 40

    return (
        <section className={styles.fichario}>
            <div className={styles.hero}>
                <h1>Faça já seu <span>ORÇAMENTO!</span></h1>
                <p>Escolha o tipo de evento e preencha os dados para solicitar um orçamento personalizado para sua celebração.</p>
            </div>

            <section className={styles.budget_section}>
                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.columns_wrapper}>
                        <aside className={styles.event_column}>
                            <h2>Tipo de Evento</h2>
                            <label htmlFor="event">
                                Tipo de Evento <span>*</span>
                            </label>
                            <select
                                id="event"
                                name="event"
                                value={selectedEvent}
                                onChange={handleEventTypeChange}
                            >
                                {eventData.map((eventInfo) => (
                                    <option key={eventInfo.key} value={eventInfo.key}>
                                        {eventInfo.title}
                                    </option>
                                ))}
                            </select>

                            {selectedEventData && (
                                <div className={styles.menu_description}>
                                    <h3>{selectedEventData.title}</h3>
                                    <ul>
                                        {selectedEventData.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        <fieldset>
                                <legend>Detalhes do Evento</legend>

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
                                    onBlur={handleBlur}
                                    placeholder="Número de convidados"
                                    className={
                                        validFields.guests === true
                                            ? styles.input_valid
                                            : validFields.guests === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                />
                                {fieldErrors.guests && <p className={styles.error_msg}>{fieldErrors.guests}</p>}
                                {guestWarning && (
                                    <p className={styles.warning_msg}>
                                        Número de Convidados abaixo do esperado
                                    </p>
                                )}

                                <div className={styles.radio_group}>
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
                                    onBlur={handleBlur}
                                    className={
                                        validFields.date === true
                                            ? styles.input_valid
                                            : validFields.date === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                />
                                {fieldErrors.date && <p className={styles.error_msg}>{fieldErrors.date}</p>}

                                <div className={styles.time_row}>
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
                                            onBlur={handleBlur}
                                            className={
                                                validFields.startTime === true
                                                    ? styles.input_valid
                                                    : validFields.startTime === false
                                                        ? styles.input_invalid
                                                        : ''
                                            }
                                        />
                                        {fieldErrors.startTime && (
                                            <p className={styles.error_msg}>{fieldErrors.startTime}</p>
                                        )}
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
                                            onBlur={handleBlur}
                                            className={
                                                validFields.endTime === true
                                                    ? styles.input_valid
                                                    : validFields.endTime === false
                                                        ? styles.input_invalid
                                                        : ''
                                            }
                                        />
                                        {fieldErrors.endTime && (
                                            <p className={styles.error_msg}>{fieldErrors.endTime}</p>
                                        )}
                                    </div>
                                </div>
                            </fieldset>
                        </aside>

                        <aside className={styles.form_column}>
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
                                    onBlur={handleBlur}
                                    placeholder="Nome completo"
                                    className={
                                        validFields.name === true
                                            ? styles.input_valid
                                            : validFields.name === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                />
                                {fieldErrors.name && <p className={styles.error_msg}>{fieldErrors.name}</p>}

                                <label htmlFor="email">
                                    E-mail <span>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="email@gmail.com"
                                    className={
                                        validFields.email === true
                                            ? styles.input_valid
                                            : validFields.email === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                />
                                {fieldErrors.email && <p className={styles.error_msg}>{fieldErrors.email}</p>}

                                <label htmlFor="phone">
                                    Telefone <span>*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="(99) 99999-9999"
                                    className={
                                        validFields.phone === true
                                            ? styles.input_valid
                                            : validFields.phone === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                />
                                {fieldErrors.phone && <p className={styles.error_msg}>{fieldErrors.phone}</p>}
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
                                    className={
                                        validFields.city === true
                                            ? styles.input_valid
                                            : validFields.city === false
                                                ? styles.input_invalid
                                                : ''
                                    }
                                >
                                    <option value="Cariacica">Cariacica</option>
                                    <option value="Serra">Serra</option>
                                    <option value="Viana">Viana</option>
                                    <option value="Vila Velha">Vila Velha</option>
                                    <option value="Vitória">Vitória</option>
                                </select>

                                <label htmlFor="neighborhood">Bairro</label>
                                <input
                                    type="text"
                                    id="neighborhood"
                                    name="neighborhood"
                                    value={form.neighborhood}
                                    onChange={handleChange}
                                    placeholder="Bairro"
                                />

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
                                    placeholder="99999-999"
                                />
                            </fieldset>
                            <button type="submit" className={styles.submit_button}>
                                    Enviar Orçamento
                            </button>
                        </aside>
                    </div>
                </form>
            </section>

            <section className={styles.contact_info}>
                <fieldset>
                    <legend>Contato</legend>
                    <div className={styles.contacts_group}>
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
                    <ul className={styles.social_icons}>
                        <li><FaEnvelope /></li>
                        <li><FaPhone /></li>
                        <li><FaWhatsapp /></li>
                    </ul>
                </fieldset>
            </section>
        </section>
    )
}

export default Contact
