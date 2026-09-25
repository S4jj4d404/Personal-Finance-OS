# Vercel-এ Personal Finance OS ওয়েবসাইট হোস্ট করার নিয়ম

এই প্রজেক্টটি **Vite + React** দিয়ে তৈরি এবং Vercel-এর জন্য সম্পূর্ণ প্রস্তুত। এখানে `vercel.json` কনফিগারেশন ফাইল যুক্ত করে দেওয়া হয়েছে, যা ক্যাশিং ও এসপিএ রাউটিং হ্যান্ডেল করবে।

---

## পদ্ধতি ১: GitHub দিয়ে হোস্ট করা (সবচেয়ে সহজ ও রিকমেন্ডেড)

### ধাপ ১: গিটহাবে কোড আপলোড করুন
আপনার কোডটি GitHub-এর একটি নতুন বা বিদ্যমান রিপোজিটরিতে পুশ করুন:
```bash
git init
git add .
git commit -m "Personal Finance OS official website"
git branch -M main
git remote add origin https://github.com/your-username/personal-finance-os-web.git
git push -u origin main
```

### ধাপ ২: Vercel-এ প্রজেক্ট ইমপোর্ট করুন
1. [vercel.com](https://vercel.com)-এ যান এবং আপনার GitHub একাউন্ট দিয়ে **Log In** বা **Sign Up** করুন।
2. ড্যাশবোর্ডে গিয়ে **"Add New..."** বাটনে ক্লিক করে **"Project"** সিলেক্ট করুন।
3. আপনার GitHub রিপোজিটরিটি (`personal-finance-os-web`) খুঁজে বের করে **"Import"**-এ ক্লিক করুন।

### ধাপ ৩: সেটিংস যাচাই ও ডেপ্লয়
Vercel স্বয়ংক্রিয়ভাবে এটি **Vite** প্রজেক্ট হিসেবে চিনে নেবে:
- **Framework Preset:** `Vite`
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

নিচের **"Deploy"** বাটনে ক্লিক করুন। মাত্র ৩০ থেকে ৬০ সেকেন্ডের মধ্যে আপনার ওয়েবসাইট লাইভ হয়ে যাবে এবং একটি ফ্রি ডোমেইন পাবেন (যেমন: `personal-finance-os.vercel.app`)!

---

## পদ্ধতি ২: Vercel CLI দিয়ে সরাসরি ডেপ্লয় করা

যদি গিটহাব ছাড়া সরাসরি আপনার কম্পিউটার থেকে টার্মিনালে কমান্ড দিয়ে হোস্ট করতে চান:

1. গ্লোবালি Vercel CLI ইন্সটল করুন:
   ```bash
   npm i -g vercel
   ```

2. প্রজেক্ট ফোল্ডারে টার্মিনাল খুলে এই কমান্ডটি দিন:
   ```bash
   vercel
   ```
   (প্রথমবার রান করলে ব্রাউজারে লগইন করতে বলবে এবং কিছু সহজ `Y/N` প্রশ্ন করবে, সবগুলোতে এন্টার প্রেস করুন।)

3. প্রোডাকশনে ফাইনাল ডেপ্লয় দিতে রান করুন:
   ```bash
   vercel --prod
   ```

---

## কাস্টম ডোমেইন (যেমন: yourdomain.com) যুক্ত করার নিয়ম

1. Vercel ড্যাশবোর্ডে গিয়ে আপনার প্রজেক্টটি ওপেন করুন।
2. **Settings** ট্যাবে যান, তারপর বাম পাশের মেন্যু থেকে **Domains** সিলেক্ট করুন।
3. আপনার ডোমেইন নাম লিখে **Add** করুন।
4. Vercel আপনাকে যে `A Record` বা `CNAME` দেবে, তা আপনার ডোমেইন প্রোভাইডারের (Namecheap, GoDaddy, Cloudflare ইত্যাদি) DNS সেটিংসে গিয়ে যুক্ত করে দিন।
5. কয়েক মিনিটের মধ্যে SSL সার্টিফিকেট সহ আপনার নিজস্ব ডোমেইনে ওয়েবসাইট চালু হয়ে যাবে।

---

## কোনো সমস্যা হলে দ্রুত সমাধান:
- **লোগো শো না করলে:** নিশ্চিত করুন `public/assets/logo.png` ফাইলটি রয়েছে।
- **APK ডাউনলোড লিংক:** `src/config/appConfig.ts` ফাইলের `APP_DOWNLOAD_URL`-এ আপনার APK ফাইলের লিঙ্ক আপডেট করতে পারবেন।
