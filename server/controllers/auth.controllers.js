export const logout = (req, res) => {
    req.logout();
    console.lo
    return res.redirect('/');
}