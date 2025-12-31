# LV Builder
[WIP] Drag end drop GUI designer for LVGL

## Demo

<table>
<tr>
    <td><a href="https://qdsang.github.io/lv_gui_builder/#/lv/builder/demo1"><img src="./docs/preview.png" title="LV Builder Preview" /></a></td>
    <td><a href="https://qdsang.github.io/lv_gui_builder/#/lv/builder/widget"><img src="./docs/preview2.png" title="LV Builder Preview" /></a></td>
</tr>
</table>

## Try It Online

  https://qdsang.github.io/lv_gui_builder/



## 🚀 Development

```bash
# configure
1. installation of the recommended plugins in the .vscode directory
2. node version 18.x or 20+
3. npm version 8.x or latest

# clone
git clone xxx

# enter the project directory
cd lv_gui_builder

# install dependencies
npm i

# start the service
npm run serve
```

## ✔️ Preview

```bash
# stage environment
npm run preview


open http://localhost:5173/#/lv/builder/demo1
```



## TODO
v1  
- [x] Emulator
- [x] Code refactoring
- [x] Property management
- [x] Component list
- [x] Component addition
- [x] Component duplication
- [x] Modify ID
- [x] Component property styles
- [ ] Align
- [X] Component sorting (zindex)
- [X] Component size drag
- [ ] Style grouping
- [ ] Generate C
- [X] Shortcuts
- [X] Window Layout [golden-layout](https://golden-layout.com/) [vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/guide/04-allow-ignore.html)

v2  
- [X] Project settings
- [ ] Events
- [ ] Font library https://lvgl.io/tools/font_conv_v5_3
- [X] Image library https://lvgl.io/tools/imageconverter_v9
- [ ] Color library
- [x] Animation library
- [ ] i18n

v3  
- [ ] VSCode Extension https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample
- [ ] Low Code
- [ ] LVGL Version Manager


## Reference
- https://github.com/kaiakz/lv_gui_designer
- https://github.com/kaiakz/walv/tree/master
- https://forum.littlevgl.com/t/wysiwyg-editor-for-littlevgl/642
- https://github.com/rohmer/LVGL_UI_Creator
- https://github.com/CURTLab/LVGLBuilder
- https://github.com/lvgl/lv_gui_builder
- https://sim.lvgl.io/v8.3/micropython/ports/javascript/index.html
- https://github.com/nishad2m8/T-Display-S3-YT/tree/master
- https://github.com/peterhinch/micropython-font-to-py/blob/master/font_to_py.py
- https://github.com/nishad2m8/T-Display-S3-YT


#ما در حال توسعه یک بیلدر گرافیکی (GUI Builder) بر پایه **LVGL** هستید که کد جاوا (Java Script یا Java System Tharp) تولید می‌کند. هدف نهایی این است که کاربران غیرمتخصص بتوانند به صورت «کم‌کد» یا «بدون کد» واسط کاربری بسازند و آن را روی لانچر و ماشین مجازی **EVM** اجرا کنند تا برای اینترنت اشیاء (IoT) و خانه هوشمند استفاده شود.

بر اساس اطلاعات مخازن گیت‌هاب شما، در ادامه ساختار فعلی پروژه و مسیر پیشنهادی برای توسعه توضیح داده شده است.

### 🧩 وضعیت فعلی پروژه‌های شما
دو مخزن اصلی شما به شرح زیر به هم مرتبط هستند:

| مخزن | توضیح | وضعیت فعلی |
| :--- | :--- | :--- |
| **GUI Builder** | یک طراح Drag & Drop برای LVGL با هدف تولید کد جاوا اسکریپت/سیستم ثرپ. | در مراحل ابتدایی توسعه (WIP). بر پایه Vue و JavaScript است. |
| **EVM Linux** | یک ماشین مجازی توکار که از موتورهای اسکریپت‌نویسی مختلف (QuickJS, Python, Java) پشتیبانی و برنامه‌ها را اجرا می‌کند. | اکوسیستم گسترده‌تری دارد و شامل ماژول‌های سخت‌افزاری و EVUE (چارچوبی شبیه Vue) است. |

### 🎯 نقشه راه پیشنهادی برای یکپارچه‌سازی
برای رسیدن به هدف نهایی، نیاز است این دو بخش را به هم متصل کنید. مراحل زیر می‌تواند راهنمای شما باشد:

```mermaid
flowchart TD
    A[کاربر غیرمتخصص<br>در GUI Builder] --> B[طراحی گرافیکی<br>با کشیدن و رها کردن]
    B --> C[بیلدر کد جاوا اسکریپت<br>مخصوص EVM را تولید میکند]
    C --> D{نحوه اجرا}
    
    D -- شبیه‌سازی --> E[اجرا در EVM Simulator<br>(شاخه bsp/simulation)]
    D -- انتقال به دستگاه --> F[آپلود روی ESP32<br>از طریق لانچر EVM]
    
    E --> G[نمایش و تست<br>در خانه هوشمند]
    F --> G
```

**1. تکمیل بیلدر گرافیکی:**
   - هدف اصلی بیلدر، تولید کد اسکریپت (مثلاً جاوا) است که **مخصوص چارچوب EVM** باشد.
   - این کد باید بتواند ماژول‌های سخت‌افزاری ESP32 (مثل GPIO، WiFi) و کتابخانه گرافیکی **LVGL** را که در EVM تعبیه شده، فراخوانی کند.
   - با توجه به ساختار فنی EVM که از **EVUE** (شبیه Vue) پشتیبانی می‌کند، منطقی است که خروجی بیلدر شما نیز با این چارچوب سازگار باشد.

**2. اتصال به لانچر و EVM:**
   - **لانچر** شما باید بتواند فایل خروجی بیلدر (کد جاوا) را بگیرد و به **موتور اسکریپت‌نویسی** داخل EVM (مثلاً QuickJS برای جاوااسکریپت) تحویل دهد تا اجرا شود.
   - مسیر `bsp/simulation` در مخزن **evm-linux** حاوی یک **شبیه‌ساز** است. این ابزار برای تست برنامه‌ها روی کامپیوتر، قبل از انتقال به سخت‌افزار ESP32، بسیار مفید است.

**3. هدف اینترنت اشیاء و خانه هوشمند:**
   - ماژول‌های از پیش آماده EVM برای **ESP32** (مانند شبکه، MQTT، GPIO) باید مستند شوند تا کاربران بیلدر بتوانند به راحتی مثلاً یک دکمه گرافیکی را به روشن کردن یک لامپ متصل کنند.
   - در نهایت، کاربر برنامه ساخته‌شده را روی EVM که بر روی **ESP32** نصب است، اجرا می‌کند.

flowchart TD
    A[طراحی کاربر در بیلدر<br>کشیدن دکمه/لیبل/...] --> B[ساختار درونی بیلدر<br>JSON Schema]
    
    B --> C{مولد کد (Generator)}
    
    C --> D[مولد C]
    C --> E[مولد MicroPython]
    C --> F[مولد EVM JS<br> <b>NEW</b>]
    
    F --> G[قالب‌های (Templates)<br> برای هر ویجت]
    G --> H[کد نهایی JS<br>مطابق الگوی EVM]
    
    H --> I[دکمه Export<br>در UI بیلدر]
    I --> J[فایل .js برای کاربر]