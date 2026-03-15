# Cài NVM: Quản lý phiên bản node js 
1. Sau khi cài NVM, mở CMD ad
2. Chạy "nvm install v22.9.0" 
3. Chạy "nvm use v22.9.0" 
4. Kiểm tra bằng câu lệnh "node -v" 
# Cài git trên máy 
## Cấu hình git 
1. Cài git 
2. Mở git bash trên máy 
3. Cấu hình mặc định tên và email 
- Config username (tên người dùng):
○ git config --global user.name “<tên bạn>”
- Config email (địa chỉ email):
○ git config --global user.email “<email của bạn>”
- Config branch default (nhánh mặc định):
○ git config --global init.defaultBranch main
# Cài Visual studio code 
## Đổi terminal mặc định 
- Ctrl + Shift + P: Hiển thị hộp
thoại
- Tìm kiếm: Terminal default
- Chọn:
Terminal: Select Default Profile
## Kết nối với git hub 
1. Mở CMD 
2. Chạy "ssh-keygen -t rsa -b 4096 -C "your_email@example.com"" 
3. Sync ra 1 key, copy nội dung key 
4. Mở git hub, chọn avata, chọn setting 
5. Chọn SSH and GPG keys 
6. Add key 
## Đưa code lên git hub 
1. Chạy "git init " 
2. Tạo repo GitHub và liên kết tới repo local
3. Chạy git remote add origin <url của repo, nên là ssh>
4. Thêm file vào staging "git add . "
5. Commit file  git commit -m ”<message>”
6. Push code git push origin main
# Cài plywright 
1. Tạo thư mục
2. Chuột phải, chọn git bash here 
3. Chạy lệnh "npm init playwright@latest" 
4. Liên tục gõ enter cho đến khi có happy hacking 
